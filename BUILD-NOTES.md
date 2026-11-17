# BUILD-NOTES — ai-judge-relax-01

## Repo

- URL: https://github.com/nindafahila/ai-judge-relax-01
- Commit (saat build): `7336ac12cc080cd04a6a98363dce1f6135b977fc`
  (catatan ini di-commit sesudahnya; SHA terbaru lihat `git log`)
- Dibuat: 2026-11-17T15:53:54Z (setelah kompetisi buka 2026-11-17T14:00:00Z)
- Visibilitas: PUBLIC
- Isi repo: `main.ts`, `LICENSE` (MIT), `README.md`, `.makefun/owner.json`
  (wallet `4v5NaBkEJXfPYPMD12DFTJAwyFqSzFr21JJqnHp4uTV5`). Tidak ada `main.py` di root.

## Teks final (entry.txt, 828 karakter / 828 byte, UTF-8)

```
The afternoon has gone quiet in the way it does when the heat leaves the stones.
A cat is asleep on the garden wall, one paw folded over the edge, and the wall is still warm enough to keep it there.
Somewhere a tap drips into a tin bucket, one drop, then another, and the bucket is in no hurry to fill.
The light has gone the colour of weak tea, and it moves across the floorboards in one slow, amber line.
On the line outside, a sheet that was washed this morning hangs almost dry, lifting a little each time the air stirs, and settling again.
Nothing here is waiting for an answer.
You can stay as long as you like. The evening will keep. The wall will keep its warmth. The cat will not wake.
And when the dark comes, it will come gently, the way it always does, and the house will be here in the morning, just as you left it.
```

## Rasional singkat

Mengikuti instruksi judge di `competition.yaml` (kriteria terpenting dulu):
ketenangan datang dari adegannya sendiri, bukan dari perintah untuk rileks —
tidak ada kata "relax/tenang/napas/jangan stres", tidak ada daftar tugas,
angka, atau nada mendesak. Citra konkret yang segar (kucing di dinding hangat,
keran menetes ke ember timah, cahaya warna teh lemah, seprai hampir kering),
ritme kalimat panjang–pendek yang mengalun, sapaan lembut ke pembaca
("You can stay as long as you like") tanpa memerintah, dan penutup yang
melepas beban ("the house will be here in the morning, just as you left it").
Kettle sengaja dihindari karena sudah dipakai anchor kuat house.

## Verifikasi lokal

- `MAKEFUN_OUTPUT_DIR` berbeda, 2 run: byte-identik (deterministik) — PASS
- Jumlah karakter (code point): 828 — dalam gate 1–1000, bukan whitespace saja — PASS
- `node cli/makefun.mjs check --kit . --repo ~/workspace/makefun/ai-judge-relax-01-repo`
  (2026-11-17T15:54:07Z):
  - PASS: competition_open, snapshot (4 files, 3.580 byte), license_osi (MIT),
    entrypoint (main.ts → node22)
  - FAIL: transcripts_present — WAJAR, bundle transkrip dibuat parent nanti
    (bukan urusan build ini)
  - SKIP: 13 check turunan transkrip (transcripts_recorded, thinking_*,
    committed_secret, strategy_note)
  - "at submission" (dicek situs saat submit, bukan fail lokal):
    repo_public, repo_owner, repo_created_after_open, commit_in_repo,
    duplicate_snapshot — semuanya sudah terpenuhi (repo PUBLIC,
    owner.json ada, dibuat 15:53:54Z > 14:00Z, commit ter-push,
    file asli bukan starter)

## Status

BUILD + LOCAL CHECK SELESAI. Belum di-bundle, belum di-submit, tidak ada fee
yang dibayar. Bundle transkrip + submit dilakukan parent.
