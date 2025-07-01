import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import NavigationDropdown from "./Dropdown";
interface NavBarLink {
  label: string;
  content: NavBarLink[] | string;
  isActive?: boolean;
}

const links: NavBarLink[] = [
  {
    label: "News",
    content: "#news",
    isActive: true,
  },
  {
    label: "Organizers",
    content: "#Organizers",
    isActive: true,
  },
  {
    label: "Volunteers",
    content: "#volunteers",
    isActive: true,
  },
  {
    label: "About",
    content: "/about",
    isActive: true,
  },
  {
    label: "Code of Conduct",
    content: [
      {
        label: "Enforcement Procedures",
        content: "/code-of-conduct/enforcement-procedures",
        isActive: true,
      },
      {
        label: "Procedures for Reporting Incidents",
        content: "/code-of-conduct/procedures-for-reporting-incidents",
        isActive: true,
      },
    ] as NavBarLink[],
    isActive: true,
  },
  {
    label: "Contact Us",
    content: "/contact-us",
    isActive: true,
  },
];

export default async function NavBarLinks() {
  return (
    <div className="flex items-center h-full text-gray-600">
      <ul className="flex space-x-8 xl:space-x-12 font-semibold text-sm xl:text-lg">
        {links.map((link) => (
          <li key={link.label} className="group">
            {Array.isArray(link.content) ? (
              <NavigationDropdown title={link.label}>
                {link.content.map((subLink) => (
                  <li
                    key={`${link.label}-${subLink.label}`}
                    className="group relative"
                  >
                    <a
                      href={subLink.content as string}
                      className={`flex items-center relative transition-all duration-200 ${
                        subLink.isActive ? "text-gray-600" : "text-white"
                      } hover:text-gray-800`}
                    >
                      {subLink.label}
                    </a>
                  </li>
                ))}
              </NavigationDropdown>
            ) : (
              <a
                href={link.content}
                className={`flex items-center relative transition-all duration-200 hover:text-gray-800`}
              >
                {link.label}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
