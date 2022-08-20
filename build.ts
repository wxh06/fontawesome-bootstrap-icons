import generate from "./generate";

generate().catch((err) => {
  console.error(err);
  process.exit(1);
});
