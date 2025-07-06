function Separator({ className = "" }: { className?: string }) {
  return (
    <div
      className={`my-1 h-px dark:bg-wt-primary/5 bg-bt-primary/5 ${className}`}
    />
  );
}

export default Separator;
