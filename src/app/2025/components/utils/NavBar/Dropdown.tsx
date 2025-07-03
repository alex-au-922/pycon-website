import Link from "next/link";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

interface NavigationDropdownProps {
  title: string;
  children: React.ReactNode;
  href?: string;
}

export default function NavigationDropdown({ title, children, href }: NavigationDropdownProps) {
  const TitleComponent = href ? (
    <Link
      href={href}
      className="text-gray-800 font-bold relative after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:w-0 after:h-0.5 after:bg-current after:transition-all after:duration-300 after:-translate-x-1/2 hover:after:w-full"
    >
      {title}
    </Link>
  ) : (
    <span className="text-gray-800 font-bold">{title}</span>
  );

  return (
    <div className="dropdown dropdown-hover group">
      <div className="flex items-center gap-1">
        {TitleComponent}
        <span className="text-sm flex items-center justify-center">
          <FaChevronUp className="hidden group-hover:inline-block" />
          <FaChevronDown className="inline-block group-hover:hidden" />
        </span>
      </div>
      <ul className="menu dropdown-content bg-white rounded-box z-1 w-52 p-2 shadow-sm">{children}</ul>
    </div>
  );
}
