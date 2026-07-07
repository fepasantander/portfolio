import React from "react";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4;
  children: React.ReactNode;
}

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className = "", level = 2, children, ...props }, ref) => {
    const Tag = `h${level}` as const;

    const styles = {
      1: "text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] text-zinc-900 dark:text-zinc-50",
      2: "text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight leading-tight text-zinc-900 dark:text-zinc-50",
      3: "text-xl sm:text-2xl font-medium tracking-tight text-zinc-900 dark:text-zinc-50",
      4: "text-lg font-medium tracking-tight text-zinc-900 dark:text-zinc-50",
    };

    return (
      <Tag
        ref={ref}
        className={`${styles[level]} ${className}`}
        {...props}
      >
        {children}
      </Tag>
    );
  }
);

Heading.displayName = "Heading";
export default Heading;
