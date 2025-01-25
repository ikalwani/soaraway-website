// src/components/shared/AfricanPattern.jsx
import React from "react";

const AfricanPattern = ({ className = "" }) => {
  return (
    <svg
      className={`absolute inset-0 w-full h-full opacity-10 ${className}`}
      viewBox="0 0 100 100"
    >
      <pattern
        id="african-pattern"
        patternUnits="userSpaceOnUse"
        width="20"
        height="20"
      >
        <path d="M0 0h20v20H0z" fill="none" />
        <path d="M10 0l10 10-10 10L0 10z" fill="currentColor" />
      </pattern>
      <rect width="100%" height="100%" fill="url(#african-pattern)" />
    </svg>
  );
};

export default AfricanPattern;
