import React from "react";

import { TVectorProps } from "../../types/vectors";

export default function FiltersIcon({
  height = "24px",
  color = "currentColor",
  style,
  className,
}: TVectorProps) {
  return (
    <svg
      height={height}
      style={style}
      className={className}
      x="0px"
      y="0px"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path stroke={color} strokeWidth="1.5" d="M21 8.25H10m-5.25 0H3" />
      <path
        stroke={color}
        strokeWidth="1.5"
        d="M7.5 6v0a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
        clipRule="evenodd"
      />
      <path stroke={color} strokeWidth="1.5" d="M3 15.75h10.75m5 0H21" />
      <path
        stroke={color}
        strokeWidth="1.5"
        d="M16.5 13.5v0a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}
