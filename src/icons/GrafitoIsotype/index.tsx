import React from "react";

import theme from "../../theme";
import { IVectorProps } from "../../types";

function GrafitoIsotype({ height = "690px", style }: IVectorProps) {
  return (
    <svg height={height} viewBox="0 0 690 690" style={style}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient">
          <stop stopColor={theme.colorsPalette.blue.default} offset="1%"></stop>
          <stop
            stopColor={theme.colorsPalette.blue.darker}
            offset="100%"
          ></stop>
        </linearGradient>
      </defs>
      <g
        id="GrafitoIsotype"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="Group">
          <rect
            id="Rectangle"
            fill="url(#linearGradient)"
            x="0"
            y="0"
            width="690"
            height="690"
            rx="148"
          />

          <path
            d="M345.5,139.994902 L525.984881,242.397413 L525.984881,446.602587 L345.5,549.005098 L165.015119,446.602587 L165.015119,242.397413 L345.5,139.994902 Z"
            id="Polygon"
            stroke={theme.colorsPalette.blue.light}
            strokeWidth="40"
          />

          <circle id="Oval" fill="#A1E0F6" cx="345" cy="144" r="52"></circle>
          <circle id="Oval" fill="#D0F0FB" cx="164" cy="238" r="52"></circle>
          <circle id="Oval" fill="#0C3D81" cx="164" cy="438" r="52"></circle>
          <circle
            id="Oval"
            fill={theme.colorsPalette.cyan.default}
            cx="346"
            cy="534"
            r="52"
          ></circle>
          <circle
            id="Oval"
            fill={theme.colorsPalette.blue.light}
            cx="526"
            cy="438"
            r="52"
          ></circle>
          <circle id="Oval" fill="#9EF4F6" cx="526" cy="238" r="52"></circle>
        </g>
      </g>
    </svg>
  );
}

export default GrafitoIsotype;
