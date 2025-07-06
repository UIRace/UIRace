"use client";
import Link from "next/link";

type Props = {
  className?: string;
  link: string;
  children: React.ReactNode;
  external?: boolean;
};

function PrimaryLink({
  className = "",
  link,
  children,
  external = false,
}: Props) {
  return (
    <Link
      href={`/${link}`}
      className={`bg-primary text-wt-primary px-4 py-2 rounded-md font-semibold ${className}`}
      target={external ? "_blank" : "_self"}
      rel={external ? "noopener noreferrer" : ""}
    >
      {children}
    </Link>
  );
}

export default PrimaryLink;
