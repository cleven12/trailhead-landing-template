# Trailhead Landing Template

A single-page adventure travel landing page: hero, route cards, packages, about and contact sections.

## Stack

Vite, React, TypeScript, Tailwind CSS, shadcn/ui

## Getting started

```sh
pnpm install
pnpm dev
```

The dev server runs on http://localhost:8080. Build for production with `pnpm build`.

## Structure

`public/trailhead-landing.html` is the standalone landing page (plain HTML/CSS). The React app at `/` redirects to it, so you can either edit the HTML directly or port its sections into components under `src/`.

## Customizing

Replace `public/hero.jpg` and `public/route-*.jpg` with your own photos, and update names, prices and copy in `public/trailhead-landing.html`.

All names, addresses, emails and phone numbers are placeholders.

## License

[Apache-2.0](LICENSE)
