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
  { label: "Landscape Design", href: "/services/landscape-design/" },
  { label: "Irrigation Systems", href: "/services/irrigation/" },
  { label: "Tree Trimming", href: "/services/tree-trimming/" },
  { label: "Sod Installation", href: "/services/sod-installation/" },
  { label: "Garden Consultation", href: "/services/consultation/" },
  { label: "Outdoor Lighting", href: "/services/outdoor-lighting/" },
];
