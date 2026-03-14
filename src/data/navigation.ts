/**
 * La King Nursery — site navigation data.
 * Single source of truth for header, footer, and mobile drawer links.
 */

export interface NavItem {
  label: string;
  href: string;
}

/** Primary navigation links shown in header and mobile drawer. */
export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services/" },
  { label: "Gallery", href: "/gallery/" },
  { label: "About", href: "/about/" },
  { label: "Blog", href: "/blog/" },
  { label: "Contact", href: "/contact/" },
];

/** Service links for the footer services column. */
export const serviceLinks: NavItem[] = [
  { label: "Plant Nursery", href: "/services/plant-nursery/" },
  { label: "Landscape Design", href: "/services/landscape-design/" },
  { label: "Lawn Care", href: "/services/lawn-care/" },
  { label: "Irrigation Systems", href: "/services/irrigation/" },
  { label: "Hardscaping & Pavers", href: "/services/hardscaping/" },
  { label: "Tree Services", href: "/services/tree-services/" },
];
