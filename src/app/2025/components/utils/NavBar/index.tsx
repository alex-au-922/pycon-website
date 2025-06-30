import SocialMediaIcons from "../SocialMediaIcons";
import NavBarLinks from "./Links";

export default async function NavBar() {
  return (
    <nav className="  p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <NavBarLinks />
        <SocialMediaIcons />
      </div>
    </nav>
  );
}
