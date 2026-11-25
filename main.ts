import { writeFileSync, chmodSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

const line = "Midnight hits and my fridge acts like the cheese is under witness protection.";

if (line.length < 1 || line.length > 200) {
  throw new Error(`entry line must be 1-200 characters, got ${line.length}`);
}

mkdirSync(outDir, { recursive: true });
const entryPath = join(outDir, "entry.txt");
writeFileSync(entryPath, line + "\n", "utf8");
chmodSync(entryPath, 0o644);
