---
name: deploy
description: Build and publish the portfolio to GitHub Pages, safely. Use when the user wants to deploy, publish, ship, or push the site live. Covers the gh-pages flow plus the base-path gotcha that silently breaks asset and resume links in production.
---

# Deploy to GitHub Pages

The site deploys to GitHub Pages via the `gh-pages` package. `npm run deploy` runs `predeploy` (which runs `build`) first, so a broken build blocks the deploy automatically.

## Pre-flight checks (do these before deploying)

1. **Lint & build cleanly:**
   ```bash
   npm run lint
   npm run build
   ```
   `build` is `tsc -b && vite build` — it type-checks, so a type error fails here.

2. **Base-path sanity (the #1 production-only bug).** `vite.config.ts` sets `base: '/adnan-portfolio/'`. In production every URL is served under that prefix, so **root-absolute links to `public/` files break**. Any link to a `public/` asset must go through the base, e.g.:
   ```tsx
   href={`${import.meta.env.BASE_URL}resume.pdf`}   // ✅ resolves in dev AND prod
   href="/resume.pdf"                                // ❌ 404s in production
   ```
   Grep for regressions before shipping:
   ```bash
   grep -rn 'href="/' src/ | grep -v 'href="/#'
   ```
   Anything matching (other than in-page `#` anchors) that points at a `public/` file needs the `import.meta.env.BASE_URL` prefix.

3. **`public/` assets present.** Confirm files the site links to actually exist (e.g. `public/resume.pdf`, `public/favicon.svg`). They're committed and served from the base path.

4. **If the repo/base path ever changes**, `vite.config.ts` `base` must be updated to match `/<repo-name>/`, or the whole deployed site 404s.

## Deploy

```bash
npm run deploy
```

This builds and pushes `dist/` to the `gh-pages` branch. Report the outcome to the user; if `predeploy`/`build` fails, stop and surface the error rather than force-deploying.

## Post-deploy

Point the user at their GitHub Pages URL and suggest a hard refresh (Pages/CDN can cache the old build for a minute). If they added a new `public/` asset that wasn't in the previous deploy, remind them it only goes live with this deploy.
