import ClickableLink from "./ClickableLink";
import NavBarLinks from "./Links";
import { LuAlignJustify } from "react-icons/lu";

export default async function NavBar() {
  return (
    <nav className="px-4 flex items-center justify-between top-0 left-0 w-full sticky z-50 h-20 backdrop-blur-sm bg-white/10">
      <div className="flex items-center justify-between lg:container lg:mx-auto px-4 md:px-8 w-full">
        <div className="flex items-center w-fit">
          <ClickableLink
            href="/"
            title="PyCon HK 2025"
            className="text-gray-800 font-bold text-lg w-fit whitespace-nowrap"
            isActive={true}
          />
        </div>
        <div className="hidden lg:flex lg:items-center lg:justify-between w-fit">
          <NavBarLinks />
        </div>
        <div className="flex items-center lg:hidden w-full h-full justify-end">
          <div className="drawer drawer-end w-fit">
            <input id="nav-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label htmlFor="nav-drawer" className="drawer-button">
                <LuAlignJustify className="text-2xl text-gray-800" />
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="nav-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                {/* Sidebar content here */}
                <li>
                  <a>Sidebar Item 1</a>
                </li>
                <li>
                  <a>Sidebar Item 2</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
