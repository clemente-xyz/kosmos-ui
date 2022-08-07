import React from "react";

import { TVectorProps } from "../../types/vectors";

export default function LinkedInIcon({
  color = "currentColor",
  gradient,
  height = "80px",
  style,
}: TVectorProps) {
  const fill = gradient ? "url(#gradient)" : color;

  return (
    <svg viewBox="0 0 420 420" height={height} style={style}>
      <linearGradient id="gradient" gradientTransform="rotate(90)">
        <stop stopColor={gradient?.from} offset="0%" />
        <stop stopColor={gradient?.to} offset="100%" />
      </linearGradient>

      <g
        transform="translate(0.000000,420.000000) scale(0.100000,-0.100000)"
        fill={fill}
        stroke="none"
      >
        <path
          d="M415 4148 c-136 -26 -282 -140 -344 -270 -46 -98 -60 -204 -39 -301
23 -103 60 -177 123 -245 306 -329 845 -117 845 333 0 314 -277 542 -585 483z"
        />
        <path
          d="M2890 2840 c-47 -10 -107 -26 -135 -35 -167 -58 -335 -186 -425 -327
l-40 -60 -2 188 -3 189 -407 3 -408 2 0 -1370 0 -1370 425 0 425 0 0 733 c0
730 5 849 36 972 37 144 125 259 236 310 114 52 297 58 412 15 111 -42 194
-145 230 -286 30 -117 36 -279 36 -1006 l0 -728 425 0 425 0 0 798 c0 825 -6
1007 -41 1202 -82 465 -318 711 -746 775 -135 20 -336 18 -443 -5z"
        />
        <path d="M90 1430 l0 -1370 425 0 425 0 0 1370 0 1370 -425 0 -425 0 0 -1370z" />
      </g>
    </svg>
  );
}
