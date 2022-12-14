import { mkdir, open, readFile, writeFile } from "node:fs/promises";
import { join, relative } from "node:path";
import { WritableStream } from "htmlparser2/lib/WritableStream";
import icons from "bootstrap-icons/font/bootstrap-icons.json";

const iconPath = relative(
  process.cwd(),
  join(
    require.resolve("bootstrap-icons/font/bootstrap-icons.json"),
    "../../icons"
  )
);

function catchENOENT(
  err: Error & {
    errno: number;
    code: string;
    syscall: string;
    path: string;
  }
) {
  if (err.code !== "ENOENT") throw err;
  console.warn(err.message);
}

const getSvg = (icon: string) =>
  open(join(iconPath, `${icon}.svg`)).then(
    (f) =>
      new Promise((resolve, reject) => {
        let w: number;
        let h: number;
        const paths: string[] = [];
        f.createReadStream().pipe(
          new WritableStream({
            onopentag(name, { cx, cy, d, height, r, width }) {
              if (name === "svg")
                [w, h] = [parseInt(width, 10), parseInt(height, 10)];
              if (name === "path") paths.push(d);
              if (name === "circle")
                paths.push(
                  `M ${cx} ${cy} m -${r}, 0 a ${r},${r} 0 1,0 ${
                    parseInt(r, 10) * 2
                  },0 a ${r},${r} 0 1,0 -${parseInt(r, 10) * 2},0`
                );
            },
            onend() {
              if (w && h && paths.length) resolve([w, h, paths.join(" ")]);
              else reject();
            },
          })
        );
      }),
    catchENOENT
  ) as Promise<[number, number, string]>;

export default () =>
  Promise.all(
    Object.entries(icons).map(async ([iconName, unicode]) => {
      const [width, height, svgPath] = (await getSvg(iconName)) ?? [0, 0, ""];
      return {
        prefix: "bi",
        iconName,
        icon: [width, height, [], unicode.toString(16), svgPath],
      };
    })
  )
    .then((faIcons) =>
      Object.fromEntries(
        faIcons.map((icon) => [
          `bi-${icon.iconName}`.replace(/([-][a-z\d])/g, (group) =>
            group.toUpperCase().replace("-", "")
          ),
          icon,
        ])
      )
    )
    .then(async (faIcons) => {
      await mkdir(join(__dirname, "src"), { recursive: true });
      await writeFile(
        join(__dirname, "src/index.json"),
        JSON.stringify(faIcons)
      );
      await writeFile(
        join(__dirname, "src/index.d.ts"),
        (
          await readFile(join(__dirname, "index.d.ts"))
        )
          .toString()
          .replace(
            "//",
            Object.keys(faIcons)
              .map((icon) => `export const ${icon}: BsIconDefinition;`)
              .join("\n")
          )
          .replace("//", `${Object.keys(faIcons).join(",\n  ")},`)
      );
    });
