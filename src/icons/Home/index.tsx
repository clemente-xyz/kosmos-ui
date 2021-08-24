import React from "react";

import { TVectorProps } from "../../types/vectors";

export default function HomeIcon({
  height = "24px",
  color = "currentColor",
  style,
  className,
}: TVectorProps) {
  return (
    <svg
      height={height}
      viewBox="0 0 100 100"
      style={style}
      className={className}
    >
      <path
        d="M23.84,89.83H41.2a4,4,0,0,0,4-4V69.27a5.16,5.16,0,1,1,10.31,0V85.83a4,4,0,0,0,4,4H76.88a8,8,0,0,0,8-8v-35l3.6,2.87a4,4,0,1,0,5-6.25L52.85,11a4,4,0,0,0-5,0L6.55,43.41a4,4,0,1,0,4.93,6.3l4.35-3.41V81.83A8,8,0,0,0,23.84,89.83Zm26.5-70.57L76.88,40.43v41.4H63.52V69.27a13.16,13.16,0,1,0-26.31,0V81.83H23.84V40Z"
        fill={color}
      />
    </svg>
  );
}
