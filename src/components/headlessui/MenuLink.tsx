"use client";
import { MenuItem } from "@headlessui/react";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
  className?: string;
  link: string;
};

function MenuLink({ children, className, link }: Props) {
  return (
    <MenuItem>
      <Link
        href={link}
        aria-current="page"
        className={`group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 dark:data-focus:bg-wt-primary/10 data-focus:bg-bt-primary/5 cursor-pointer ${className}`}
      >
        {children}
      </Link>
    </MenuItem>
  );
}

export default MenuLink;
