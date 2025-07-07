"use client";
import { MenuItem } from "@headlessui/react";
import Link from "next/link";
import { memo } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  title?: string;
  link: string;
};

function MenuLink({ children, className, link, title = "" }: Props) {
  return (
    <MenuItem>
      <Link
        href={link}
        title={title || (children as string)}
        aria-label={title || (children as string)}
        aria-current="page"
        className={`group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 dark:data-focus:bg-wt-primary/10 data-focus:bg-bt-primary/5 cursor-pointer ${className}`}
      >
        {children}
      </Link>
    </MenuItem>
  );
}

export default memo(MenuLink);
