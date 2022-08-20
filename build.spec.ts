import { test } from "@jest/globals";

test("Generate index JSON", () =>
  import("./generate")
    .then(({ default: generate }) => generate())
    .then(() => import("./src/index.json")));
