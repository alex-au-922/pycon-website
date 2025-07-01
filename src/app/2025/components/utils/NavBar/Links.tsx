import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import NavigationDropdown from "./Dropdown";
import ClickableLink from "./ClickableLink";
interface NavBarLink {
  label: string;
  content: NavBarLink[] | string;
  isActive?: boolean;
}

const links: NavBarLink[] = [
  {
    label: "News",
    content: "#news",
    isActive: false,
  },
  {
    label: "Organizers",
    content: "#Organizers",
    isActive: false,
  },
  {
    label: "Volunteers",
    content: "#volunteers",
    isActive: false,
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
      <ul className="flex space-x-8 xl:space-x-12 font-semibold text-base xl:text-lg">
        {links.map((link) => (
          <li key={link.label} className="group">
            {Array.isArray(link.content) ? (
              <NavigationDropdown title={link.label}>
                {link.content.map((subLink) => (
                  <li
                    key={`${link.label}-${subLink.label}`}
                    className="group relative"
                  >
                    <ClickableLink
                      href={subLink.content as string}
                      title={subLink.label}
                      isActive={subLink.isActive}
                      className="hover:bg-gray-400/50"
                    />
                  </li>
                ))}
              </NavigationDropdown>
            ) : (
              <ClickableLink
                href={link.content}
                title={link.label}
                isActive={link.isActive}
                className={
                  link.isActive
                    ? "after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:w-0 after:h-0.5 after:bg-current after:transition-all after:duration-300 after:-translate-x-1/2 hover:after:w-full"
                    : ""
                }
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
