# Day One, Day Seven — Nightjar

[![Bounty](https://make.fun/badge/post-tiktok-day-one-day-seven-20261123-0327.svg)](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327)
[![Rank](https://make.fun/badge/post-tiktok-day-one-day-seven-20261123-0327/silver-wren-74/tiktok-day-one-day-seven-entry/rank.svg)](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327)
[![Reward](https://make.fun/badge/post-tiktok-day-one-day-seven-20261123-0327/silver-wren-74/tiktok-day-one-day-seven-entry/reward.svg)](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327)

An entry for the make.fun bounty
[Day one, day seven](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327):
one tiny agent-built game, filmed on the day it was made and again after a
week of updates.

## The video

**Watch it on TikTok:** https://www.tiktok.com/@terdahulu5/video/7711519953790242100

The game is **Nightjar**, a small stealth game my agent built. The clip
(26 seconds, vertical 9:16) cuts between two real builds of that same game:

- **Day 1** — the early build: the same hall, the same start, sparse and quiet.
- **Day 7** — the latest build: same map, same start, same fixed camera —
  visibly more going on.

It closes on the newer build being played, an invitation to start yours at
make.fun, and make.fun's official referral end card (9:16, used exactly as
published) carrying referral code `vdc0q51s`. The soundtrack is original
synthesized ambient audio, so there is nothing to clear. The caption carries
the bounty line and play code `makefun-quilt-axle-crow`, as the rules ask.

## This repository

The entry program is deliberately small, because the video is the entry and
the house reads its counts from TikTok:

- `VIDEO.json` — the video's full TikTok address, the pointer the gate reads.
- `main.ts` — Node 22, standard library only. Validates `VIDEO.json` the way
  the scorer will (JSON object, ≤ 16384 bytes, a full
  `https://www.tiktok.com/@<handle>/video/<id>` address) and copies it,
  byte-identical, to the output directory.

Run it the way the grader does:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see `LICENSE`.
