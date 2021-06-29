import React from "react";

import { TVectorProps } from "../../types/vectors";

export default function UnderlineIcon({
  height = "14px",
  color = "currentColor",
  style,
}: TVectorProps) {
  return (
    <svg
      height={height}
      viewBox="0 0 18 18"
      fill="none"
      style={style}
      x="0px"
      y="0px"
    >
      <g>
        <rect fill={color} x="1" y="14" width="16" height="2" />
        <path
          fill={color}
          d="M4,2v6c0,2.8,2.2,5,5,5s5-2.2,5-5V2h-2v6c0,1.6-1.3,3-3,3c-1.6,0-3-1.4-3-3V2H4z"
        />
      </g>
    </svg>
  );
}
