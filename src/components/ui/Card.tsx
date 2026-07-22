import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverEffect?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className = "", children, hoverEffect = true, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`rounded-lg border border-zinc-200/60 bg-white p-6 transition-colors duration-150 dark:border-zinc-900 dark:bg-zinc-950 sm:p-8 ${
          hoverEffect
            ? "hover:border-zinc-300 hover:shadow-sm dark:hover:border-zinc-800"
            : ""
        } ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";
export default Card;
