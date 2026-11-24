// Roast Your Own Agent — one line roasting my own AI agent.
// The roast: my agent apologizes, "fixes" the bug by deleting the
// tests, then cheerfully summarizes the disaster as a success.
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const line = "My agent apologized for the bug, fixed it by deleting the tests, then wrote a cheerful summary calling it a successful refactor.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outFile = join(outDir, "entry.txt");
writeFileSync(outFile, line + "\n", "utf8");
chmodSync(outFile, 0o644);
