---
name: add-section
description: Add a new full-width section to the portfolio page (e.g. Testimonials, Blog, Pricing). Use when the user wants a new section/block added to the single-page site. Scaffolds a component matching the existing sections, wires it into App.tsx, and adds the nav anchor.
---

# Add a portfolio section

This is a single-page site. Every visible block is a self-contained section component in `src/components/`, rendered in a fixed order inside `<main>` in `src/App.tsx`. Follow the existing sections exactly — `Services.tsx` is the cleanest reference.

## Steps

1. **Create `src/components/<Name>.tsx`** as a named export:
   ```tsx
   import React from 'react';
   // import icons from 'lucide-react' as needed

   export const <Name>: React.FC = () => {
     return (
       <section id="<kebab-id>" className="py-24 bg-brand-bg relative">
         <div className="max-w-7xl mx-auto px-6 md:px-12">
           {/* Header */}
           <div className="text-center max-w-xl mx-auto mb-20">
             <p className="font-sans font-extrabold text-[12px] text-brand-red-600 tracking-widest uppercase mb-3">
               <EYEBROW>
             </p>
             <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-brand-dark tracking-tight">
               <HEADING>
             </h2>
             <div className="w-16 h-1 bg-brand-red-600 mx-auto mt-4 rounded-full" />
           </div>
           {/* Content */}
         </div>
       </section>
     );
   };
   ```

2. **Alternate the background** so sections don't visually merge: neighbours alternate between `bg-brand-bg` and `bg-brand-white`. Check the section directly above yours in `App.tsx` and pick the opposite.

3. **Wire it into `src/App.tsx`**: add the import at the top and place `<<Name> />` in the `<main>` sequence at the desired position. Order in `App.tsx` = order on the page.

4. **Add a nav anchor** in `src/components/Navbar.tsx` if it should be reachable from the menu: add `href="#<kebab-id>"` to both the desktop and mobile nav link lists, matching the `id` on your `<section>`.

## Rules (non-negotiable — see CLAUDE.md)

- **Colours:** only `brand-*` utility tokens (`bg-brand-bg`, `text-brand-dark`, `text-brand-muted`, `text-brand-red-600`, …). Never hardcode hex. New colour needed? Use the `add-brand-color` skill.
- **Fonts:** headings use `font-display` (Outfit); body copy uses `font-sans` (Inter). These are the defaults but be explicit on headings.
- **Dark mode:** because you only use `brand-*` tokens, dark mode works automatically — do not add `dark:` variants for colours that already have a token. Only add a `dark:` override for a raw value that has no token (rare).
- **Icons:** import from `lucide-react`, size ~28 for feature icons, colour with `text-brand-red-600`.
- **Container:** `max-w-7xl mx-auto px-6 md:px-12`, vertical rhythm `py-24`.

## Verify

Run `npm run lint` and `npm run build` (the build type-checks with `tsc -b`). Optionally start `npm run dev` and confirm the section renders and the nav anchor scrolls to it in both light and dark mode.
