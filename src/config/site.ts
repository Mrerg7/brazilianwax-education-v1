export const SITE = {
  name: 'brazilianwax.education',
  title: 'brazilianwax.education • Premium Domain for Sale | Brazilian Waxing Training',
  description:
    'Own brazilianwax.education — the definitive domain for professional Brazilian waxing education, epilation training, and business startup programs.',
  url: 'https://brazilianwax.education/',
  email: 'sales@desertrich.com',
  locale: 'en_US',
  googleSiteVerification: '',
} as const;

export const CF_IMAGES = {
  accountHash: '-sPAUAWeA405NiWJ0SNIQA',
  heroImageId: '67ab657c-278d-4288-0212-9e9953cfea00',
} as const;

export function cfImageUrl(imageId: string, variant = 'public'): string {
  return `https://imagedelivery.net/${CF_IMAGES.accountHash}/${imageId}/${variant}`;
}

export const OG_IMAGE = cfImageUrl(CF_IMAGES.heroImageId);

export const ACQUISITION_MAILTO = `mailto:${SITE.email}?subject=${encodeURIComponent('Acquisition Inquiry - brazilianwax.education')}&body=${encodeURIComponent('Hello,\n\nI am interested in acquiring brazilianwax.education. Please provide details and next steps.\n\nBest regards,')}`;

export const DISCLAIMER_DATE = 'July 5, 2026';
