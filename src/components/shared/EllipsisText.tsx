function EllipsisText({
  children,
  className = "",
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <span className={`truncate block ${className}`}>{children}</span>;
}

export default EllipsisText;
