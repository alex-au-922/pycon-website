import SocialMediaIcons from "../SocialMediaIcons";
import NavBarLinks from "./Links";
import Image from "next/image";

export default async function NavBar() {
  return (
    <nav className="bg-gray-800 text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold cursor-pointer">
          <a href="/">
            <Image
              src="/icon.png"
              alt="PyCon HK 2025 Logo"
              width={40}
              height={40}
              className="inline-block mr-2"
            />
          </a>
        </div>
        <NavBarLinks />
        <SocialMediaIcons />
      </div>
    </nav>
  );
}
