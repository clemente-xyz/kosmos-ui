import React from "react";

import { TVectorProps } from "../../types/vectors";

export default function OctahedronIcon({
  color = "currentColor",
  gradient,
  height = "80px",
  style,
}: TVectorProps) {
  const fill = gradient ? "url(#gradient)" : color;

  return (
    <svg height={height} style={style} viewBox="0 0 324 324">
      <linearGradient id="gradient">
        <stop stopColor={gradient?.from} offset="0%" />
        <stop stopColor={gradient?.to} offset="100%" />
      </linearGradient>

      <g
        transform="translate(0.000000,324.000000) scale(0.100000,-0.100000)"
        fill={fill}
        stroke="none"
      >
        <path
          d="M828 2412 c-746 -745 -748 -747 -748 -788 0 -40 3 -44 748 -793 735
-740 748 -752 786 -751 37 0 59 20 787 741 532 527 751 750 759 774 7 21 7 40
1 56 -5 13 -344 358 -753 767 l-743 742 -45 0 -45 0 -747 -748z m698 -259 c-4
-4 -1025 -333 -1035 -333 -3 0 228 234 514 520 l520 520 3 -351 c1 -194 1
-354 -2 -356z m1220 -330 c-1 -2 -234 71 -516 162 -282 91 -514 165 -516 165
-2 0 -4 161 -4 357 l0 358 520 -520 c285 -285 518 -520 516 -522z m-1216 -202
l0 -349 -247 80 c-137 44 -377 121 -535 171 -158 51 -288 94 -288 97 0 3 132
47 293 98 228 73 761 245 775 251 1 1 2 -156 2 -348z m877 123 c205 -65 373
-121 373 -124 0 -3 -168 -59 -373 -124 -204 -66 -445 -143 -534 -172 l-163
-52 0 348 0 348 163 -52 c89 -29 330 -106 534 -172z m-1382 -494 c275 -89 501
-162 502 -164 2 -2 2 -161 1 -355 l-3 -351 -520 521 c-286 286 -511 518 -500
515 11 -3 245 -78 520 -166z m1725 167 c0 -1 -234 -236 -520 -522 l-520 -520
0 356 0 355 513 167 c490 159 527 170 527 164z"
        />
      </g>
    </svg>
  );
}
