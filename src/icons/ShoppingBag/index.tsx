import React from "react";

import { TVectorProps } from "../../types/vectors";

export default function ShoppingBagIcon({
  height = "24px",
  color = "currentColor",
  style,
  className,
}: TVectorProps) {
  return (
    <svg
      height={height}
      className={className}
      style={style}
      viewBox="0 0 32 32"
    >
      <path
        fill={color}
        d="M26,9.9A1,1,0,0,0,25,9H22V8A6,6,0,0,0,10,8V9H7a1,1,0,0,0-1,.9L4.24,26.69a3,3,0,0,0,3,3.31H24.78a3,3,0,0,0,3-3.31ZM12,8a4,4,0,0,1,8,0V9H12ZM25.52,27.67a1,1,0,0,1-.74.33H7.22a1,1,0,0,1-1-1.1L7.9,11H24.1l1.67,15.9A1,1,0,0,1,25.52,27.67ZM22,14a6,6,0,0,1-12,0,1,1,0,0,1,2,0,4,4,0,0,0,8,0,1,1,0,0,1,2,0Z"
      />
    </svg>
  );
}
