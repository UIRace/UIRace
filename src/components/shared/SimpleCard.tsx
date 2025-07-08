"use client";
import { memo } from "react";

function SimpleCard({
  children,
  className = "",
  handleClick = () => {},
}: {
  children: React.ReactNode;
  className?: string;
  handleClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}) {
  return (
    <div
      onClick={(e) => handleClick(e)}
      className={`rounded-xl border dark:border-wt-primary/5 border-bt-primary/10 dark:bg-wt-primary/5 bg-wt-primary/20 dark:text-wt-primary text-bt-primary p-4 backdrop-blur-2xl ${className}`}
    >
      {children}
    </div>
  );
}

export default memo(SimpleCard);
