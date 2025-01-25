// src/components/shared/Button.jsx
import React from "react";
import { ChevronRight } from "lucide-react";

const Button = ({
  children,
  variant = "primary",
  className = "",
  withArrow = false,
  ...props
}) => {
  const baseStyles =
    "px-8 py-4 rounded-full font-semibold text-lg transition-all";

  const variants = {
    primary: "bg-yellow-400 hover:bg-yellow-500 text-black",
    secondary: "border-2 border-white text-white hover:bg-white/10",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      <span className="flex items-center">
        {children}
        {withArrow && (
          <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
        )}
      </span>
    </button>
  );
};

export default Button;
