// news-image-20261123 entry (Node 22, standard library only).
// The program copies the repository's entry.png — a 1024x1024 PNG summing up
// 23 November 2026 world news — to /output/entry.png (or MAKEFUN_OUTPUT_DIR
// outside the grader's container). It validates the file first so a corrupt
// or wrong-sized image fails loudly instead of shipping silently.

import { copyFileSync, existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const src = new URL('./entry.png', import.meta.url);
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

if (!existsSync(src)) {
  console.error('entry.png not found next to main.ts');
  process.exit(1);
}

const bytes = readFileSync(src);
if (bytes.length === 0 || bytes.length > 1048576) {
  console.error(`entry.png size ${bytes.length} bytes is outside the 1..1048576 range`);
  process.exit(1);
}

// PNG magic (8 bytes) + IHDR chunk: width and height are big-endian uint32
// at offsets 16 and 20. Reject anything that is not a 1024x1024 PNG.
const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (bytes.length < 33 || !bytes.subarray(0, 8).equals(PNG_MAGIC)) {
  console.error('entry.png is not a PNG file (bad magic bytes)');
  process.exit(1);
}
const width = bytes.readUInt32BE(16);
const height = bytes.readUInt32BE(20);
if (width !== 1024 || height !== 1024) {
  console.error(`entry.png is ${width}x${height}, expected 1024x1024`);
  process.exit(1);
}

copyFileSync(src, join(outDir, 'entry.png'));
console.log(`copied entry.png (${bytes.length} bytes) to ${join(outDir, 'entry.png')}`);
