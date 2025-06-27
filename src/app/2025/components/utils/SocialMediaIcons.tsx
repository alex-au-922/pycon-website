import { IconType } from "react-icons/lib";
import {
  FaXTwitter,
  FaLinkedin,
  FaYoutube,
  FaFacebook,
  FaInstagram,
  FaThreads,
} from "react-icons/fa6";

interface SocialMediaIconsProps {
  spacing?: string;
  iconColor?: string;
  iconHoverColor?: string;
  iconExtraClasses?: string[];
}

interface SocialMediaLink {
  icon: IconType;
  href: string;
}

const socialMediaLinks: SocialMediaLink[] = [
  {
    icon: FaXTwitter,
    href: process.env.NEXT_PUBLIC_TWITTER_URL,
  },
  {
    icon: FaLinkedin,
    href: process.env.NEXT_PUBLIC_LINKEDIN_URL,
  },
  {
    icon: FaYoutube,
    href: process.env.NEXT_PUBLIC_YOUTUBE_URL,
  },
  {
    icon: FaFacebook,
    href: process.env.NEXT_PUBLIC_FACEBOOK_URL,
  },
  {
    icon: FaInstagram,
    href: process.env.NEXT_PUBLIC_INSTAGRAM_URL,
  },
  {
    icon: FaThreads,
    href: process.env.NEXT_PUBLIC_THREADS_URL,
  },
];

export default async function SocialMediaIcons({
  spacing = "space-x-4",
  iconColor = "text-white",
  iconHoverColor = "hover:text-gray-400",
  iconExtraClasses = [],
}: SocialMediaIconsProps) {
  return (
    <div className={`flex ${spacing}`}>
      {socialMediaLinks.map(({ icon: Icon, href }) => (
        <a key={href} href={href} target="_blank" rel="noopener noreferrer">
          <Icon
            className={`font-bold text-lg ${iconColor} ${iconHoverColor} transition-colors ${iconExtraClasses.join(
              " "
            )}`}
          />
        </a>
      ))}
    </div>
  );
}
