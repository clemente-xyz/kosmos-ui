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
      viewBox="0 0 100 100"
      className={className}
      style={style}
    >
      <path
        fill={color}
        d="M69,28c0-10.5-8.5-19-19-19s-19,8.5-19,19s8.5,19,19,19S69,38.5,69,28z M39,28c0-6.1,4.9-11,11-11s11,4.9,11,11   s-4.9,11-11,11S39,34.1,39,28z"
      />
      <path
        fill={color}
        d="M50,51C27.3,51,10.6,63.3,7.5,82.4c-0.4,2.6,0.3,5.3,2.1,7.3c1.8,2.1,4.3,3.3,7,3.3h66.8c2.7,0,5.3-1.2,7-3.3   c1.7-2,2.5-4.7,2.1-7.3C89.4,63.3,72.7,51,50,51z M84.3,84.6c-0.1,0.2-0.4,0.4-0.9,0.4H16.6c-0.5,0-0.8-0.3-0.9-0.4   c-0.2-0.2-0.3-0.5-0.3-0.9C17.9,68.7,31.4,59,50,59s32.1,9.7,34.6,24.7C84.6,84.1,84.5,84.4,84.3,84.6z"
      />
    </svg>
  );
}
