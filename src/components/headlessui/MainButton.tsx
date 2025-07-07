"use client";
import { MenuButton } from "@headlessui/react";
import { memo } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

function MainButton({ children, className = "" }: Props) {
  return (
    <MenuButton
      className={`inline-flex items-center gap-2 rounded-md dark:bg-bt-primary/10 bg-wt-primary/10 backdrop-blur-2xl border dark:border-wt-primary/10 border-bt-primary/10 px-3 py-1.5 text-sm/6 font-semibold dark:text-wt-primary text-bt-primary dark:shadow-lg focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-bt-secondary/5 cursor-pointer data-open:bg-bt-secondary/5 dark:data-hover:bg-wt-secondary/5 dark:data-open:bg-wt-secondary/5 ${className}`}
    >
      {children}
    </MenuButton>
  );
}

export default memo(MainButton);
