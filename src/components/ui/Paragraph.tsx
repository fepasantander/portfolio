import React from "react";

interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: "lead" | "base" | "sm";
  children: React.ReactNode;
}

export const Paragraph = React.forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ className = "", variant = "base", children, ...props }, ref) => {
    const styles = {
      lead: "text-lg sm:text-xl font-normal leading-relaxed text-zinc-600 dark:text-zinc-400",
      base: "text-base font-normal leading-relaxed text-zinc-600 dark:text-zinc-400",
      sm: "text-sm font-normal leading-relaxed text-zinc-500 dark:text-zinc-500",
    };

    return (
      <p
        ref={ref}
        className={`${styles[variant]} ${className}`}
        {...props}
      >
        {children}
      </p>
    );
  }
);

Paragraph.displayName = "Paragraph";
export default Paragraph;
