function LoadingCircle({ className = "" }: { className?: string }) {
  return (
    <div
      className={`w-5 rounded-full border-none bg-[length:600px_50px] h-5 bg-gradient-to-r from-bt-primary/10 dark:from-wt-primary/30 via-wt-primary/15 dark:via-bt-primary/10 dark:to-wt-primary/30 to-bt-primary/10 animate-line-loader-600 ${className}`}
    />
  );
}

export default LoadingCircle;
