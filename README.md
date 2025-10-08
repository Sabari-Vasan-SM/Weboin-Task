# Weboin — Digital Marketing Agency (Next.js + TypeScript)

A clean, modern marketing landing site built with Next.js 13 (App Router) and TypeScript.

This repo is a compact starter/demo for agency websites. It includes a responsive layout, theme toggle, and a fullscreen loading animation that displays while the app hydrates.

## Highlights

- Next.js 13 (App Router)
- TypeScript
- Small, accessible components (navbar, footer, theme toggle)
- Fullscreen loader animation integrated into the root layout

## Quick start

Prerequisites: Node.js (16.8+), npm or pnpm.

Install dependencies:

```powershell
npm install
```

Run development server:

```powershell
npm run dev
```

Build for production:

```powershell
npm run build
npm run start
```

Type-check the project:

```powershell
npx tsc --noEmit
```

## Project structure

- `src/app/` - Next.js app directory (routing, global styles)
  - `layout.tsx` - root layout where the loader is integrated
  - `globals.css` - global styles including loader CSS
- `src/components/` - shared components (navbar, footer, theme toggle, loader)
- `src/components/sections/` - page sections used on the landing page
- `src/lib/` - utility functions

## Loader behavior

On initial page load a small client-side loader shows and fades out after the window `load` event or a short timeout. Styles live in `src/app/globals.css` and the component is in `src/components/loader.tsx`.

## Contributing

- Keep components small and focused.
- Use client components only when you need browser APIs or hooks ("use client").
- Add tests for logic-heavy utilities in `src/lib/`.

## License

Provided as-is for demo purposes.

---

_If you'd like, I can add a small `README` section documenting the loader implementation and how to tweak timings or replace the spinner with a branded animation._
