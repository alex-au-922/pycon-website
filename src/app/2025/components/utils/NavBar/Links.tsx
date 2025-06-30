import { FaChevronDown } from "react-icons/fa6";
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
    <ul className="flex space-x-8 xl:space-x-12 mt-6 font-semibold text-sm xl:text-lg">
      {links.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            className={`flex items-center relative transition-all duration-200 ${
              link.isActive ? "text-gray-600" : "text-white"
            } hover:text-gray-800 hover:scale-90`}
          >
            {link.label}
            <FaChevronDown className="ml-1 text-xs" />
          </a>
        </li>
      ))}
    </ul>
  );
}
