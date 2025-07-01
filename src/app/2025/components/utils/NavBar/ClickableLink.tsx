import Link from "next/link";

interface ClickableLinkProps {
  href: string;
  className?: string;
  isActive?: boolean;
  target?: string;
  title: string;
  onClick?: () => void;
}

export default function ClickableLink({
  href,
  className = "",
  isActive = false,
  target,
  title,
  onClick,
}: ClickableLinkProps) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");

  // Base styles
  const baseStyles = "transition-all duration-200 relative";

  // Separate active and hover styles
  const linkStyles = isActive
    ? "text-gray-800 font-bold"
    : "text-gray-600/50";

  // Combined styles
  const combinedStyles = `${baseStyles} ${linkStyles} ${className}`;

  if (!isActive) {
    return (
      <span className={combinedStyles} onClick={onClick}>
        {title}
      </span>
    );
  }

  if (isExternal) {
    return (
      <a
        href={href}
        className={combinedStyles}
        target={target || "_blank"}
        rel="noopener noreferrer"
        onClick={onClick}
      >
        {title}
      </a>
    );
  }

  return (
    <Link href={href} className={combinedStyles} onClick={onClick}>
      {title}
    </Link>
  );
}
