function LoadingLine({
  className = "",
  number,
}: {
  className?: string;
  number?: 4 | 6 | 8;
}) {
  const randomNumber = number || Math.floor(Math.random() * 3 + 2) * 2; // Generates 4, 6, or 8

  if (randomNumber === 6) {
    return (
      <div
        className={`rounded border-none bg-[length:600px_50px] h-5 bg-gradient-to-r from-bt-primary/10 dark:from-wt-primary/30 via-wt-primary/15 dark:via-bt-primary/10 dark:to-wt-primary/30 to-bt-primary/10 animate-line-loader-600 ${className}`}
      />
    );
  }
  if (randomNumber === 4) {
    return (
      <div
        className={`rounded border-none bg-[length:400px_100px] h-5 bg-gradient-to-r from-bt-primary/10 dark:from-wt-primary/30 via-wt-primary/15 dark:via-bt-primary/10 dark:to-wt-primary/30 to-bt-primary/10 animate-line-loader-400 ${className}`}
      />
    );
  }

  return (
    <div
      className={`rounded border-none bg-[length:800px_50px] h-5 bg-gradient-to-r from-bt-primary/10 dark:from-wt-primary/30 via-wt-primary/15 dark:via-bt-primary/10 dark:to-wt-primary/30 to-bt-primary/10 animate-line-loader-800 ${className}`}
    />
  );
}

export default LoadingLine;
