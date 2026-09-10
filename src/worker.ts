/**
 * Canonical host redirects for Search Console.
 * www and HTTP variants must 301 to https://brazilianwax.education
 * so Google does not treat them as "Alternate page with proper canonical tag".
 */
const CANONICAL_HOST = 'brazilianwax.education';

interface Env {
  ASSETS: Fetcher;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const host = url.hostname.toLowerCase();
    const isWww = host === `www.${CANONICAL_HOST}`;
    const isHttp = url.protocol === 'http:';

    if (isWww || isHttp) {
      url.protocol = 'https:';
      url.hostname = CANONICAL_HOST;
      return Response.redirect(url.toString(), 301);
    }

    return env.ASSETS.fetch(request);
  },
};
