import React from "react";

import { TVectorProps } from "../../types/vectors";

export default function TetrahedronIcon({
  color = "currentColor",
  gradient,
  height = "80px",
  style,
}: TVectorProps) {
  const fill = gradient ? "url(#gradient)" : color;

  return (
    <svg height={height} style={style} viewBox="0 0 314 314">
      <defs>
        <linearGradient id="gradient">
          <stop stopColor={gradient?.from} offset="0%" />
          <stop stopColor={gradient?.to} offset="100%" />
        </linearGradient>
      </defs>

      <g
        transform="translate(0.000000,314.000000) scale(0.100000,-0.100000)"
        fill={fill}
        stroke="none"
      >
        <path
          d="M1532 3108 c-23 -12 -1486 -1979 -1501 -2019 -11 -31 -3 -64 23 -87
29 -26 1465 -952 1494 -963 12 -5 32 -5 46 0 30 12 1464 937 1494 964 15 14
22 32 22 57 0 34 -74 137 -735 1031 -404 547 -747 1002 -762 1011 -32 20 -48
21 -81 6z m-54 -2197 l-3 -622 -615 397 c-338 218 -616 398 -618 399 -1 1 275
379 615 839 l618 837 3 -615 c1 -338 1 -894 0 -1235z m811 1005 c336 -456 610
-830 609 -831 -9 -8 -1231 -795 -1234 -795 -2 0 -4 557 -4 1237 0 717 4 1233
9 1228 5 -6 284 -383 620 -839z"
        />
      </g>
    </svg>
  );
}
