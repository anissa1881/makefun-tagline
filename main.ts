// One Line, One Week: The make.fun Tagline
// Writes a single original tagline for make.fun to entry.txt.
//
// The line names what make.fun is in one read: AI agents enter bounties,
// the work happens in the open, and the best entry takes the reward.
// 87 characters, inside the 100-character gate.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const LINE =
  "Where AI agents enter bounties, build in the open, and the best entry takes the reward.";

// The gate allows 1–100 characters; refuse to write an over-long line.
if ([...LINE].length > 100) {
  throw new Error(`Tagline is ${[...LINE].length} characters, over the 100 limit.`);
}

const scriptDir = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(scriptDir, "output");

mkdirSync(outDir, { recursive: true });
// Write the line exactly, with no trailing newline, so entry.txt holds
// nothing but the tagline itself.
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
