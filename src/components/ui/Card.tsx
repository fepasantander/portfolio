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
        className={`bg-white dark:bg-zinc-950 border border-zinc-200/60 dark:border-zinc-900 rounded-lg p-6 sm:p-8 transition-all duration-300 ${
          hoverEffect
            ? "hover:border-zinc-300 dark:hover:border-zinc-800 hover:shadow-[0_8px_30px_rgb(0,0,0,0.02)] dark:hover:shadow-[0_8px_30px_rgb(0,0,0,0.3)] hover:-translate-y-0.5"
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
