import SocialMediaIcons from "../../../../utils/SocialMediaIcons";
import NavBarLinks from "./Links";

export default async function NavBar() {
  return (
    <nav className="px-4 flex items-center top-0 left-0 w-full sticky z-50 h-20 backdrop-blur-sm bg-white/10">
      <div className="container mx-auto flex justify-between items-center">
        <NavBarLinks />
        <SocialMediaIcons spacing="space-x-6" iconExtraClassName="text-xl" />
      </div>
    </nav>
  );
}
