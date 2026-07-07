import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "link";
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", disabled, children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-zinc-400 disabled:opacity-50 disabled:cursor-not-allowed text-sm rounded-md";

    const variants = {
      primary:
        "bg-zinc-950 text-zinc-50 hover:bg-zinc-800 border border-zinc-950 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200 dark:border-zinc-50 px-5 py-2.5 shadow-sm",
      secondary:
        "bg-transparent text-zinc-950 border border-zinc-200 hover:bg-zinc-50 dark:text-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900 px-5 py-2.5",
      link:
        "bg-transparent text-zinc-950 dark:text-zinc-50 hover:underline px-0 py-0 focus:ring-0",
    };

    const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={combinedClassName}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
