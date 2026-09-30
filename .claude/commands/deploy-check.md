---
description: Pre-deploy readiness check — lint, type-check/build, and scan for base-path link bugs.
---

Run a read-only readiness check for deploying this portfolio to GitHub Pages. Do **not** deploy — only report whether it's safe to.

Do all of the following and summarize the results as a short checklist (✅/❌ per item):

1. **Lint:** run `npm run lint` and report any errors/warnings.
2. **Build / type-check:** run `npm run build` (this runs `tsc -b && vite build`). Report success or the first failure.
3. **Base-path link scan:** run `grep -rn 'href="/' src/ | grep -v 'href="/#'`. Any match that points at a `public/` file (e.g. `/resume.pdf`) is a production bug — it must use `` href={`${import.meta.env.BASE_URL}...`} `` instead. List offenders, or say none found.
4. **Public assets:** confirm the files the app links to exist in `public/` (at least `resume.pdf` and `favicon.svg`).
5. **Base config:** confirm `vite.config.ts` `base` still matches the repo name (`/adnan-portfolio/`).

End with a one-line verdict: **READY** or **NOT READY (reasons)**. If everything passes, remind the user they can deploy with `npm run deploy`.
