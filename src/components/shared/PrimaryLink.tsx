"use client";
import Link from "next/link";
import { memo } from "react";

type Props = {
  className?: string;
  link: string;
  children: React.ReactNode;
  title?: string;
  external?: boolean;
};

function PrimaryLink({
  className = "",
  link,
  children,
  title = "",
  external = false,
}: Props) {
  return (
    <Link
      href={`/${link}`}
      title={title || (children as string)}
      aria-label={title || (children as string)}
      className={`bg-primary flex items-center justify-center gap-3 text-wt-primary px-4 py-2 rounded-md font-semibold ${className}`}
      target={external ? "_blank" : "_self"}
      rel={external ? "noopener noreferrer" : ""}
    >
      {children}
    </Link>
  );
}

export default memo(PrimaryLink);
