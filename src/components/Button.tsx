import Link from "next/link";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "text";
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  href?: string;
}

export default function Button({
  children,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
  disabled = false,
  href,
}: ButtonProps) {
  // Base styling classes
  const baseStyle =
    "inline-flex items-center justify-center font-inter text-sm font-bold tracking-wider uppercase px-6 py-3.5 rounded transition-all duration-200 focus:outline-none select-none";

  // Variant styled classes
  const variantStyles = {
    primary:
      "bg-[#0b2545] hover:bg-[#153b68] text-white active:bg-[#071930] disabled:bg-[#0b2545]/50 disabled:cursor-not-allowed",
    secondary:
      "bg-[#fbc02d] hover:bg-[#f9a825] text-[#0b2545] active:bg-[#f57f17] disabled:bg-[#fbc02d]/50 disabled:cursor-not-allowed",
    outline:
      "border-2 border-[#0b2545] text-[#0b2545] hover:bg-[#0b2545] hover:text-white active:bg-[#071930] active:border-[#071930] disabled:opacity-50 disabled:cursor-not-allowed",
    text: "text-[#0b2545] hover:text-[#fbc02d] active:text-[#f9a825] disabled:opacity-50 disabled:cursor-not-allowed",
  };

  const styledClasses = `${baseStyle} ${variantStyles[variant]} ${className}`;

  if (href) {
    if (disabled) {
      return <span className={`${styledClasses} opacity-50 cursor-not-allowed`}>{children}</span>;
    }
    return (
      <Link href={href} className={styledClasses} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={styledClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
