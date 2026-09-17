# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the Vite dev server with HMR
- `npm run build` — type-check (`tsc -b`) then produce a production build in `dist/`
- `npm run lint` — run ESLint over the repo
- `npm run preview` — serve the built `dist/` locally
- `npm run deploy` — build and publish `dist/` to GitHub Pages via `gh-pages` (runs `predeploy` → `build` first)

There is no test runner configured in this project.

## Architecture

Single-page marketing/portfolio site built with **React 19 + TypeScript + Vite**, styled with **Tailwind CSS v4**.

- **Composition root:** `src/main.tsx` mounts `src/App.tsx`. `App.tsx` wraps everything in `<ToastProvider>` and renders the page as a fixed sequence of section components (`Navbar`, `Hero`, `Services`, `Works`, `Experience`, `TechStack`, `Footer`). Each file in `src/components/` is one self-contained section — there is no router; the nav links are in-page anchors.

- **Theming (read `src/index.css` before touching colors or dark mode):** Tailwind v4 is configured entirely in CSS — there is no `tailwind.config.js`. The `@theme` block in `index.css` defines the design tokens (e.g. `--color-brand-red-600`, `--color-brand-dark`), which is what makes utility classes like `bg-brand-bg`, `text-brand-dark`, and `text-brand-red-600` work. Light/dark values are swapped by redefining CSS variables under `:root` vs `.dark`. Dark mode is class-based: `Navbar.tsx` toggles the `dark` class on `document.documentElement` and persists the choice in `localStorage` (`theme` key), defaulting to the system `prefers-color-scheme`. When adding colors, add a token in `@theme` and its light/dark values rather than hardcoding hex in components.

- **Toasts:** `src/components/Toast.tsx` exposes `ToastProvider` and a `useToast()` hook. Components (e.g. clipboard-copy actions in `Hero`/`Footer`) call `showToast(message)`; the provider renders a single auto-dismissing toast. `useToast()` throws outside the provider.

- **Icons:** `lucide-react`.

## Deployment gotcha

`vite.config.ts` sets `base: '/adnan-portfolio/'` for GitHub Pages, so all bundled asset URLs are served under that path. However, static links in components use root-absolute paths (e.g. `href="/resume.pdf"` in `Navbar.tsx` and `Footer.tsx`), and `public/resume.pdf` is served relative to the base path in production. Keep the `base` value and any hosting/repo rename in sync, and be aware root-absolute links to `public/` files may need the base prefix (or `import.meta.env.BASE_URL`) to resolve correctly on the deployed site.
