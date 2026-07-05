# brazilianwax.education

Premium domain acquisition landing page for **brazilianwax.education** — built with Astro static output and deployed to Cloudflare Workers Static Assets.

## Stack

- [Astro](https://astro.build) — static site generator (`output: 'static'`, no adapter)
- [Tailwind CSS](https://tailwindcss.com) — styling
- [Content Collections](https://docs.astro.build/en/guides/content-collections/) — curriculum, market data, and value props
- [Cloudflare Workers Static Assets](https://developers.cloudflare.com/workers/static-assets/) — global edge hosting
- [Cloudflare Images](https://developers.cloudflare.com/images/) — hero imagery CDN

## Development

```bash
npm install
npm run dev
```

## Build & Deploy

```bash
npm run build
npm run deploy
```

## Configuration

| File | Purpose |
|------|---------|
| `astro.config.mjs` | Astro site URL, sitemap, Tailwind |
| `wrangler.toml` | Workers Static Assets (`./dist`) |
| `src/config/site.ts` | Domain, email, OG image, mailto CTA |

## Acquisition Contact

**sales@desertrich.com**
