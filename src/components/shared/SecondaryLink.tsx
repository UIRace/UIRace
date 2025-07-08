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

function SecondaryLink({
  className = "",
  link,
  children,
  title = "",
  external = false,
}: Props) {
  return (
    <Link
      href={external ? link : `/${link}`}
      title={title || (children as string)}
      aria-label={title || (children as string)}
      className={`rounded-md flex items-center justify-center gap-3 px-4 py-2 font-semibold border dark:border-wt-primary/5 border-bt-primary/10 dark:bg-wt-primary/5 bg-wt-primary/20 dark:text-wt-primary text-bt-primary backdrop-blur-2xl ${className}`}
      target={external ? "_blank" : "_self"}
      rel={external ? "noopener noreferrer" : ""}
    >
      {children}
    </Link>
  );
}

export default memo(SecondaryLink);
