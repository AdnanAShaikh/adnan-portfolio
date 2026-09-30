---
name: add-brand-color
description: Add or change a brand color token so it works in both light and dark mode. Use whenever a new color is needed in the UI, or an existing brand color should change. Prevents hardcoded hex values by routing every color through the Tailwind v4 @theme system in src/index.css.
---

# Add or change a brand color

Tailwind v4 here is configured **entirely in CSS** — there is no `tailwind.config.js`. All colors live in `src/index.css` and flow through three places. Get all three right or the color will be missing a theme, or the utility class won't exist.

## How the color system works

1. **`:root` / `.dark`** — the raw values. `:root` holds the light-mode value; `.dark` holds the dark-mode value for the *same* variable name. Dark mode is toggled by the `.dark` class on `<html>` (see `Navbar.tsx`).
2. **`@theme`** — maps a CSS variable to a Tailwind color name. `--color-brand-x: var(--brand-x)` is what makes `bg-brand-x`, `text-brand-x`, `border-brand-x`, etc. exist as utility classes.

A token that changes between themes MUST be defined in `:root` AND `.dark`, then referenced from `@theme`. A token that is the same in both themes can be a literal directly in `@theme` (like the fixed `--color-brand-red-*` scale).

## Steps to add a theme-aware color (e.g. `brand-gold`)

1. In `src/index.css`, add the light value under `:root`:
   ```css
   :root {
     /* ...existing... */
     --brand-gold: #b8860b;
   }
   ```
2. Add the dark value under `.dark` (pick a value that reads well on the dark background):
   ```css
   .dark {
     /* ...existing... */
     --brand-gold: #e6c200;
   }
   ```
3. Expose it as a Tailwind token inside `@theme`:
   ```css
   @theme {
     /* ...existing... */
     --color-brand-gold: var(--brand-gold);
   }
   ```
4. Use it in components as `text-brand-gold`, `bg-brand-gold`, `border-brand-gold`, etc. **Never** write the hex in a component.

## Adding a fixed color (same in both themes)

Only add it under `@theme` with a literal value (follow the `--color-brand-red-300` … `-900` entries, which are fixed). No `:root`/`.dark` entry needed.

## Changing an existing color

Edit the value under `:root` (light) and/or `.dark` (dark). Do not touch the `@theme` mapping unless you're renaming the token — renaming means updating every `brand-<old>` usage across `src/components/`.

## Verify

Run `npm run dev`, then toggle the theme switch in the navbar and confirm the color looks right in **both** light and dark. Run `npm run lint`.
