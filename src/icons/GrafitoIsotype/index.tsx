import React, { CSSProperties } from "react";

import theme from "../../theme";

export type TGrafitoIsotype = {
  height?: string;
  colors?: {
    g?: string;
    r?: string;
    dot?: string;
  };
  style?: CSSProperties;
};

export default function GrafitoIsotypeIcon({
  height = "24px",
  colors,
  style,
}: TGrafitoIsotype) {
  const gColor = colors?.g || theme.colorsPalette.white.default;
  const rColor = colors?.r || theme.colorsPalette.yellow.light;
  const dotColor = colors?.dot || theme.colorsPalette.cyan.default;

  return (
    <svg height={height} viewBox="0 0 214 187" style={style}>
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="Group" transform="translate(0.380359, 0.208101)">
          <path
            d="M162.260987,61.3256534 L125.012734,61.3256534 C117.78882,42.3913655 104.329427,32.9242215 84.634554,32.9242215 C55.0922445,32.9242215 38.7446152,58.3802613 38.7446152,87.3208656 C38.7446152,116.26147 44.2563735,152.921637 84.634554,152.921637 C111.553341,152.921637 125.732535,140.398637 127.172137,115.352638 L89.1317159,115.352638 L89.1317159,87.3208656 L163.161449,87.3208656 C164.329725,116.896775 161.461428,137.715869 154.556559,149.778149 C138.825834,177.258526 109.596625,186.555774 84.634554,186.555774 C27.3149707,186.555774 0,145.651913 0,96.5491228 C0,47.4463323 23.2434963,0 84.634554,0 C125.561926,0 151.437404,20.2830815 162.260987,60.8492446 L162.260987,61.3256534 Z"
            id="Path"
            fill={gColor}
          />

          <path
            d="M127.169961,87.2781984 L163.138919,87.2781984 L163.274024,107.73686 C168.284254,98.2583672 175.090327,91.6305849 183.692245,87.8535134 C192.294162,84.0764418 202.257643,83.3997761 213.582687,85.8235162 L213.582687,118.832792 C199.449671,115.342931 187.808445,116.002915 178.659009,120.812744 C168.946863,125.918389 163.7735,134.613975 163.138919,146.899504 L163.138919,186.185887 L127.169961,186.185887 L127.169961,87.2781984 Z"
            id="Path-2"
            fill={rColor}
          />

          <circle
            id="Oval"
            fill={dotColor}
            cx="194.619641"
            cy="167.791899"
            r="19"
          />
        </g>
      </g>
    </svg>
  );
}
