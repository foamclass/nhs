export type NavLink = {
  href?: string;
  key: string;
  subLinks?: NavLink[];
};

export const NAV_LINKS: NavLink[] = [
  { href: "/", key: "home" },
  {
    key: "about",
    subLinks: [
      { href: "/about", key: "about_us" },
      { href: "/project-overview", key: "project_overview" },
    ],
  },
  {
    href: "/our-team",
    key: "our_team"
  },
  {
    key: "opportunities",
    subLinks: [
      { href: "/investment-opportunities", key: "investment_opportunities" },
      { href: "/progress-updates", key: "progress_updates" },
    ],
  },
  {
    key: "resources",
    subLinks: [
      { href: "/knowledge-center", key: "knowledge_center" },
      { href: "/doctor-voices", key: "doctor_voices" },
    ],
  },
  { href: "/contact", key: "contact" },
  { href: "/contact?reason=inquiry", key: "contact_inquiry" },
];

export const SITE_NAME = "Noble Health Services";

export const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'ur', label: 'Urdu' }
];
