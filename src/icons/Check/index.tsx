import React from "react";

import { TVectorProps } from "../../types/vectors";

export default function CheckIcon({
  color = "currentColor",
  gradient,
  height = "16px",
  style,
}: TVectorProps) {
  const fill = gradient ? "url(#gradient)" : color;

  return (
    <svg height={height} style={style} viewBox="0 0 16 16">
      <linearGradient id="gradient">
        <stop stopColor={gradient?.from} offset="0%" />
        <stop stopColor={gradient?.to} offset="100%" />
      </linearGradient>

      <path
        fill={fill}
        d="M2.094,7.952c-0.193,0.197-0.19,0.513,0.007,0.707c1.288,1.265,2.567,2.582,3.801,3.913c0.095,0.103,0.228,0.16,0.367,0.16  c0.006,0,0.012,0,0.019,0c0.146-0.005,0.281-0.074,0.372-0.188c2.403-3.008,4.844-5.847,7.255-8.435  c0.188-0.202,0.177-0.519-0.025-0.707c-0.201-0.188-0.519-0.176-0.707,0.025c-2.307,2.477-4.641,5.18-6.942,8.041  c-1.122-1.198-2.276-2.38-3.439-3.522C2.604,7.752,2.288,7.753,2.094,7.952z"
      />
    </svg>
  );
}
