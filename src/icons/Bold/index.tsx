import React from "react";

import { TVectorProps } from "../../types/vectors";

export default function BoldIcon({
  height = "14px",
  color = "currentColor",
  style,
}: TVectorProps) {
  return (
    <svg height={height} viewBox="0 0 32 32" fill="none" style={style}>
      <path
        fill={color}
        d="M25.81,17.31a6.7411,6.7411,0,0,0-1.89-2.01A7.9268,7.9268,0,0,0,25.9,9.76c0-5.12-3.74-7.81-8.87-7.76H7.78A2.9983,2.9983,0,0,0,5,5.17V26.83A2.9983,2.9983,0,0,0,7.78,30h9.86c5.48.04,9.34-2.57,9.36-8.06A8.5915,8.5915,0,0,0,25.81,17.31ZM11,7h5.27c2.27.04,3.79.69,3.8,3.02-.02,2.29-1.55,2.95-3.8,2.98H11Zm5.83,18H11V19h5.83c3.47,0,3.92,1.6,3.92,3S20.3,25,16.83,25Z"
      />
    </svg>
  );
}
