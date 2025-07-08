"use client";
import { memo } from "react";

type Props = {
  className?: string;
  children: React.ReactNode;
  title?: string;
  handleClick?: () => void;
};

function PrimaryButton({
  className = "",
  children,
  title = "",
  handleClick = () => {},
}: Props) {
  return (
    <button
      title={title || (children as string)}
      aria-label={title || (children as string)}
      onClick={handleClick}
      className={`rounded-md flex items-center justify-center gap-3 px-4 py-2 font-semibold border dark:border-wt-primary/5 border-bt-primary/10 dark:bg-wt-primary/5 bg-wt-primary/10 dark:text-wt-primary text-bt-primary backdrop-blur-2xl cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
}

export default memo(PrimaryButton);
