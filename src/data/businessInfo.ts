/**
 * La King Nursery — centralized business information.
 * Import from here instead of hardcoding values in components.
 */

export const businessInfo = {
  name: "La King Nursery",
  tagline: "Where South Texas Grows",
  description:
    "Family-owned nursery serving Kingsville and South Texas since 1998 with quality plants, expert landscaping, and personalized garden advice.",
  established: 1998,

  phone: {
    display: "(361) 228-5193",
    href: "tel:+13612285193",
  },

  address: {
    street: "1304 E Kennedy",
    city: "Kingsville",
    state: "TX",
    zip: "78363",
    full: "1304 E Kennedy, Kingsville, TX 78363",
    googleMapsUrl:
      "https://maps.google.com/?q=1304+E+Kennedy+Kingsville+TX+78363",
  },

  hours: {
    display: "Mon - Sat: 8AM - 6PM",
    structured: [
      { days: "Monday - Saturday", hours: "8:00 AM - 6:00 PM" },
      { days: "Sunday", hours: "Closed" },
    ],
  },

  social: {
    facebook: "https://www.facebook.com/p/La-King-Nursery-100057242960913/",
  },

  urls: {
    quote: "/contact/",
  },
} as const;

export type BusinessInfo = typeof businessInfo;

/**
 * Convenience alias with derived fields.
 * Several home-page components import `{ business }` and reference
 * shorthand properties like `phone`, `phoneHref`, `founded`, etc.
 */
export const business = {
  ...businessInfo,
  founded: businessInfo.established,
  yearsInBusiness: new Date().getFullYear() - businessInfo.established,
  phone: businessInfo.phone.display,
  phoneHref: businessInfo.phone.href,
  googleMapsUrl: businessInfo.address.googleMapsUrl,
  rating: 4.9,
  reviewCount: 150,
  serviceAreas: [
    "Kingsville",
    "Alice",
    "Bishop",
    "Riviera",
    "Robstown",
    "Falfurrias",
    "Premont",
    "San Diego",
  ],
} as const;
