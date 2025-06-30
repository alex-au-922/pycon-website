import SocialMediaIcons from "./SocialMediaIcons";

export default function Footer() {
  return (
    <footer className="w-full py-8 mt-12">
      <div className="container mx-auto flex items-center justify-center px-4">
        <div className="text-center text-gray-500 text-sm font-semibold">
          &copy; {new Date().getFullYear()} PyCon Hong Kong. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
