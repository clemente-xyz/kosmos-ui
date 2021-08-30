import React from "react";

import { TVectorProps } from "../../types/vectors";

export default function ProfileIcon({
  height = "24px",
  color = "currentColor",
  style,
  className,
}: TVectorProps) {
  return (
    <svg
      height={height}
      viewBox="0 0 32 32"
      className={className}
      style={style}
    >
      <path
        fill={color}
        d="M22,8a6,6,0,1,0-6,6A6.0066,6.0066,0,0,0,22,8ZM12,8a4,4,0,1,1,4,4A4.0042,4.0042,0,0,1,12,8Z"
      />
      <path
        fill={color}
        d="M5,27a3.0033,3.0033,0,0,0,3,3H24a3.0033,3.0033,0,0,0,3-3A11,11,0,0,0,5,27Zm11-9a9.01,9.01,0,0,1,9,9,1.0009,1.0009,0,0,1-1,1H8a1.0009,1.0009,0,0,1-1-1A9.01,9.01,0,0,1,16,18Z"
      />
    </svg>
  );
}
