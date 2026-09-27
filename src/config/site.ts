export const SITE = {
  name: 'brazilianwax.education',
  title: 'brazilianwax.education for Sale | Brazilian Waxing Training Domain',
  description:
    'brazilianwax.education is for sale — the definitive .education domain for Brazilian waxing training, epilation certification, and beauty-business education. Escrow welcome.',
  url: 'https://brazilianwax.education',
  email: 'sales@desertrich.com',
  locale: 'en_US',
  googleSiteVerification: 'AHILggxEpimiKsgI7ExBg1zG5a2AS0aWwxCTDZWitkQ',
  published: '2026-07-05',
  modified: '2026-09-27',
  askingPrice: '9500',
} as const;

export const CF_IMAGES = {
  accountHash: '-sPAUAWeA405NiWJ0SNIQA',
  heroImageId: '67ab657c-278d-4288-0212-9e9953cfea00',
} as const;

export function cfImageUrl(imageId: string, variant = 'public'): string {
  return `https://imagedelivery.net/${CF_IMAGES.accountHash}/${imageId}/${variant}`;
}

export const OG_IMAGE = cfImageUrl(CF_IMAGES.heroImageId);

export const ACQUISITION_MAILTO = `mailto:${SITE.email}?subject=${encodeURIComponent('Offer for brazilianwax.education')}&body=${encodeURIComponent('Hello,\n\nI would like to acquire brazilianwax.education.\n\nName:\nEmail:\nOffer (USD):\nIntended use:\n\nMessage:\n')}`;

export const DISCLAIMER_DATE = 'September 27, 2026';
