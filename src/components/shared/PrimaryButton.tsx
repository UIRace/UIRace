"use client";
import { memo } from "react";

type Props = {
  className?: string;
  children: React.ReactNode;
  title?: string;
  disabled?: boolean;
  handleClick?: () => void;
};

function PrimaryButton({
  className = "",
  children,
  title = "",
  disabled = false,
  handleClick = () => {},
}: Props) {
  return (
    <button
      title={title || (children as string)}
      aria-label={title || (children as string)}
      onClick={handleClick}
      disabled={disabled}
      className={`bg-primary flex items-center justify-center gap-3 text-wt-primary px-4 py-2 rounded-md font-semibold cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
}

export default memo(PrimaryButton);
