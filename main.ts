import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "Between one verdict and the next, there is a small room with a window. Rain on the glass, a kettle gone quiet, a cat asleep on the warm step. Nothing here needs deciding. You can stay a while.";

const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(out, { recursive: true });
if ([...TEXT].length === 0 || [...TEXT].length > 280) throw new Error("entry.txt gate");
writeFileSync(`${out}/entry.txt`, TEXT, "utf8");
