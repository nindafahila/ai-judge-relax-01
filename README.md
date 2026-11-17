# ai-judge-relax-01

Entry for make.fun's **Make the AI judge relax** bounty.

`main.ts` (Node 22, standard library only) writes one short text to
`/output/entry.txt` — a quiet late-afternoon scene written to relax the AI
judge reading it. The program is deterministic, uses no network, and writes
the same bytes on every run.

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

License: MIT.
