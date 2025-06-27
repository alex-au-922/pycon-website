interface NavBarLink {
  label: string;
  href?: string;
  isActive?: boolean;
}

const links: NavBarLink[] = [
  {
    label: "Event Details",
    href: "#event-details",
    isActive: true,
  },
  {
    label: "Volunteers",
    href: "#volunteers",
    isActive: true,
  },
  {
    label: "Proposals",
    href: "#proposals",
    isActive: true,
  },
  {
    label: "Sponsors",
    href: "#sponsors",
    isActive: true,
  },
  {
    label: "Reviewers",
    href: "#reviewers",
    isActive: true,
  },
  {
    label: "Code of Conduct",
    href: "#code-of-conduct",
    isActive: true,
  },
];

export default async function NavBarLinks() {
  return (
    <ul className="flex space-x-8">
      {links.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            className={`relative transition-colors duration-100 after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:w-0 after:h-0.5 after:bg-current after:transition-all after:duration-300 after:-translate-x-1/2 hover:after:w-full ${
              link.isActive ? "text-yellow-400" : "text-white"
            }`}
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
