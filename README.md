# news-image-20261123

Sum up 23 November's world news in one image — entry for the make.fun
competition [news-image-20261123](https://make.fun/bounty/news-image-20261123)
($100 prize pool, entries close 2026-11-25T00:00:00Z).

`main.ts` (Node 22, standard library only) copies the repository's
`entry.png` — a 1024x1024 PNG front page — to `/output/entry.png`.

## The six stories — Monday 23 November 2026

1. **COP31 ends with no deal** — the climate summit in Antalya collapses
   after the EU and about 130 nations reject a text with no fossil-fuel
   phase-out.
2. **Russian strike kills at least 10 near Kyiv** — a strike on a block of
   flats in Dymer; rescuers pull a seven-year-old boy alive from the rubble.
3. **Russian warship sunk off Libya** — the corvette Merkury sinks at
   Benghazi after a suspected Ukrainian sea-drone attack; Kyiv confirms it.
4. **AI fears sink markets** — Tokyo's Nikkei falls 5.06% and the S&P 500
   drops 3.7% as doubts grow over the AI boom.
5. **Democrats win 258 House seats** — the largest US House majority for
   either party since 1992, the Associated Press projects.
6. **Mexico captures 'El Chapo Isidro'** — FBI most-wanted cartel boss
   Fausto Isidro Meza Flores is arrested in Sinaloa.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
