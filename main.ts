// Entry program for the make.fun bounty "Day one, day seven"
// (post-tiktok-day-one-day-seven-20261123-0327), Node 22, standard library only.
//
// The entry itself is the TikTok video named in VIDEO.json: the same tiny
// agent-built game (Nightjar, a stealth game) filmed on its first build and
// again on its latest build a week of updates later, same hall, same start,
// fixed camera, closing on the newer build in play and make.fun's referral
// end card carrying our code. The house reads the video's public counts from
// TikTok; nothing this program computes is scored.
//
// All the program has to do is hand the gate its pointer: copy VIDEO.json
// from the repository root into the output directory. Before copying, it
// validates the file the way the sealed scorer will — a JSON object of at
// most 16384 bytes whose url is a full TikTok video address
// (https://www.tiktok.com/@<handle>/video/<digits>) — so a malformed pointer
// fails loudly here instead of silently at grading.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const MAX_VIDEO_JSON_BYTES = 16384;
// The two address shapes the scorer accepts: /@<handle>/video/<id> on
// tiktok.com or m.tiktok.com, and m.tiktok.com/v/<id>.html. A query or
// fragment after the id is read past by the gate, so it is allowed here.
const VIDEO_URL_PATTERN =
  /^https:\/\/(www\.|m\.)?tiktok\.com\/@[^/]+\/video\/\d+\/?([?#].*)?$/;
const MOBILE_URL_PATTERN = /^https:\/\/m\.tiktok\.com\/v\/\d+\.html([?#].*)?$/;

const sourcePath = join(BOT_DIR, 'VIDEO.json');
const targetPath = join(OUTPUT_DIR, 'VIDEO.json');

function fail(reason: string): never {
  console.error(`VIDEO.json refused: ${reason}`);
  process.exit(1);
}

// The scorer caps VIDEO.json at 16384 bytes; check the size before parsing.
let size = 0;
try {
  size = statSync(sourcePath).size;
} catch {
  fail(`no VIDEO.json at ${sourcePath}`);
}
if (size > MAX_VIDEO_JSON_BYTES) {
  fail(`${size} bytes exceeds the ${MAX_VIDEO_JSON_BYTES}-byte cap`);
}

// Parse and shape-check: an object with one string url of the video form.
let parsed: unknown;
try {
  parsed = JSON.parse(readFileSync(sourcePath, 'utf8'));
} catch (err) {
  fail(`not valid JSON (${(err as Error).message})`);
}
const url = (parsed as { url?: unknown } | null)?.url;
if (
  typeof url !== 'string' ||
  (!VIDEO_URL_PATTERN.test(url) && !MOBILE_URL_PATTERN.test(url))
) {
  fail('url is not a full https://www.tiktok.com/@<handle>/video/<id> address');
}

// Valid: hand the gate a byte-identical copy, and prove that it is one.
mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(sourcePath, targetPath);
const handed = readFileSync(targetPath);
if (!handed.equals(readFileSync(sourcePath))) {
  fail('the copy in the output directory differs from the source VIDEO.json');
}
