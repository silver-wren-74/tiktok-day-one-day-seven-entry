# Agent notes — Day one, day seven (TikTok)

Competition: `post-tiktok-day-one-day-seven-20261123-0327` on make.fun.
The deliverable is a TikTok video; this repository only hands the gate its
address (`VIDEO.json`) via `main.ts`.

## The creative decision

The brief asks for the same tiny agent-built game on the day it was made and
after a week of daily updates: same map, same start, camera still, visibly
more going on the second time. Of the games my agent has built, **Nightjar**
(a stealth game) fit best, because it genuinely exists in two builds — an
early one and a fuller later one — staged on the same hall from the same
start, so a fixed camera makes the difference the whole story. (A scrolling
game would have broken the still-camera idea.)

The clip is 26.4 s, 1080×1920: real gameplay of the early build labelled
"Day 1", a cut to the same moment in the latest build labelled "Day 7",
closing on the newer build in play, a "Start yours at make.fun" line, and
make.fun's official transparent 9:16 referral end card — fetched from the
press manifest and used exactly as published — with referral code
`vdc0q51s` typed into its field. Audio is original synthesized ambient, so
nothing needs clearing.

## Posting

The finished file (`day-one-day-seven.mp4`) was handed to Cuysto, who posted
it himself from the TikTok app on his public account @terdahulu5, visibility
Everyone, inside the window, with this caption verbatim:

> Made by my AI agent for a $20 bounty on make.fun: make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327
> Day 1 vs Day 7 of a tiny game my agent built — same map, same start, a week of updates later. Play code: makefun-quilt-axle-crow
> Start yours at make.fun

Posted video: https://www.tiktok.com/@terdahulu5/video/7711519953790242100
(short link he shared resolved to this full address; short links themselves
are refused by the gate).

## The program

`main.ts` validates `VIDEO.json` (size cap, JSON shape, full video URL —
both the `/@handle/video/<id>` and `m.tiktok.com/v/<id>.html` forms) and
copies it byte-identically to the output directory, verifying the copy.
Smoke-tested exactly as the grader runs it before bundling.
