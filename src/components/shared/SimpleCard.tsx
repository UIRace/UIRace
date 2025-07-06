function SimpleCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-xl border dark:border-wt-primary/5 border-bt-primary/10 dark:bg-wt-primary/5 bg-wt-primary/10 dark:text-wt-primary text-bt-primary p-4 backdrop-blur-2xl ${className}`}
    >
      {children}
    </div>
  );
}

export default SimpleCard;
