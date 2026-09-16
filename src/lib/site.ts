export const STRIPE_TIP_JAR_URL =
  "https://donate.stripe.com/14A6oGbHv3hHekY2ODew801";

export const SUPPORT_HREF = "/support";
export const SUPPORT_NAV_LABEL = "Support Us";

export const headerNav = [
  { href: "/", label: "Home" },
  { href: SUPPORT_HREF, label: SUPPORT_NAV_LABEL },
] as const;

export const footerNav = [
  { href: "/", label: "Home", external: false },
  { href: SUPPORT_HREF, label: SUPPORT_NAV_LABEL, external: false },
  { href: "https://smfworks.com/blog", label: "SMF Works Blog", external: true },
  { href: "https://smfworks.com/contact", label: "Contact", external: true },
] as const;
