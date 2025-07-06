"use client";
import Link from "next/link";

type Props = {
  className?: string;
  link: string;
  children: React.ReactNode;
  external?: boolean;
};

function SecondaryLink({
  className = "",
  link,
  children,
  external = false,
}: Props) {
  return (
    <Link
      href={`/${link}`}
      className={`rounded-md flex items-center justify-center gap-3 px-4 py-2 font-semibold border dark:border-wt-primary/5 border-bt-primary/10 dark:bg-wt-primary/5 bg-wt-primary/10 dark:text-wt-primary text-bt-primary backdrop-blur-2xl ${className}`}
      target={external ? "_blank" : "_self"}
      rel={external ? "noopener noreferrer" : ""}
    >
      {children}
    </Link>
  );
}

export default SecondaryLink;
