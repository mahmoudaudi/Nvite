# apps/web — Next.js frontend foundation

Setup-phase only. No product screens implemented.

## Scripts

- `npm run dev --workspace=@app/web` — start dev server on :3000
- `npm run build --workspace=@app/web` — production build
- `npm run lint --workspace=@app/web` — ESLint
- `npm run typecheck --workspace=@app/web` — `tsc --noEmit`
- `npm run test --workspace=@app/web` — Vitest foundation test

## Structure

- `app/` — App Router (layout + verification page only)
- `components/` — minimal reusable `Button`, `Card`
- `lib/` — `env`, `api-client`, `utils` foundation
