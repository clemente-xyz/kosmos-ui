import React from "react";

import { TVectorProps } from "../../types/vectors";

export default function SignOutIcon({
  height = "20px",
  color = "currentColor",
  style,
  className,
}: TVectorProps) {
  return (
    <svg
      height={height}
      className={className}
      style={style}
      viewBox="0 0 100 100"
    >
      <path
        fill={color}
        d="M46.8,93a13,13,0,0,0,13-13V68.95a5,5,0,0,0-10,0V80a3,3,0,0,1-3,3h-27a3,3,0,0,1-3-3V20a3,3,0,0,1,3-3h27a3,3,0,0,1,3,3V31.2a5,5,0,1,0,10,0V20a13,13,0,0,0-13-13h-27a13,13,0,0,0-13,13V80a13,13,0,0,0,13,13Z"
      />
      <path
        fill={color}
        d="M91.52,46.29l-21-21a5,5,0,0,0-7.07,7.07L76.09,45H33.8a5,5,0,0,0,0,10H76.09L63.41,67.68a5,5,0,1,0,7.07,7.07l21-21a4.94,4.94,0,0,0,0-7.42Z"
      />
    </svg>
  );
}
