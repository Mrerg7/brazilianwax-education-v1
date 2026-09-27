# brazilianwax.education

Premium domain acquisition landing page for **brazilianwax.education** — Astro static output deployed to Cloudflare Workers Static Assets.

## Stack

- [Astro](https://astro.build) — static site generator (`output: 'static'`)
- [Tailwind CSS](https://tailwindcss.com) — styling
- Content collections — curriculum, market data, use cases, value props
- Cloudflare Workers Static Assets — edge hosting with www/HTTP → apex 301s
- Cloudflare Images — hero imagery CDN

## Pages

| Path | Purpose |
|------|---------|
| `/` | Domain sales landing + FAQ |
| `/acquire/` | Offer form, escrow details, asking price |
| `/brazilian-waxing-training/` | SEO guide for training keyword intent |

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
| `astro.config.mjs` | Site URL, sitemap, Tailwind |
| `wrangler.toml` | Workers Static Assets + Worker-first routing |
| `src/worker.ts` | 301 www/HTTP → `https://brazilianwax.education` |
| `src/config/site.ts` | Domain, email, asking price, OG image |

## Acquisition Contact

**sales@desertrich.com** · Asking **$9,500** · Escrow.com preferred
