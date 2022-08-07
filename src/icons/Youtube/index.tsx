import React from "react";

import { TVectorProps } from "../../types/vectors";

export default function YoutubeIcon({
  color = "currentColor",
  gradient,
  height = "80px",
  style,
}: TVectorProps) {
  const fill = gradient ? "url(#gradient)" : color;

  return (
    <svg x="0px" y="0px" height={height} viewBox="0 0 480 480" style={style}>
      <linearGradient id="gradient" gradientTransform="rotate(90)">
        <stop stopColor={gradient?.from} offset="0%" />
        <stop stopColor={gradient?.to} offset="100%" />
      </linearGradient>

      <g
        transform="translate(0.000000,479.000000) scale(0.100000,-0.100000)"
        fill={fill}
        stroke="none"
      >
        <path
          d="M2045 4210 c-455 -19 -1012 -85 -1220 -145 -102 -30 -266 -105 -352
-162 -175 -116 -315 -300 -375 -495 l-23 -73 -3 -940 c-3 -695 0 -958 8 -1010
63 -367 366 -651 818 -764 82 -21 276 -51 482 -76 777 -93 1612 -77 2385 45
300 48 513 144 691 312 136 130 222 280 259 459 23 109 22 1875 -1 1987 -67
325 -329 589 -704 707 -213 67 -767 133 -1290 155 -267 11 -400 11 -675 0z
m531 -1407 c344 -206 605 -369 617 -385 27 -36 26 -97 -2 -137 -16 -21 -204
-140 -623 -391 -672 -403 -648 -392 -714 -326 l-34 34 0 741 c0 820 -3 787 63
817 18 8 47 12 64 10 19 -3 276 -151 629 -363z"
        />
      </g>
    </svg>
  );
}
