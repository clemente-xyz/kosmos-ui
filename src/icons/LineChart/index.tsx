import React from "react";

import { IconProps } from "../types";

function LineChartIcon({
  height = "20px",
  color = "currentColor",
  style,
}: IconProps) {
  return (
    <svg height={height} style={style} viewBox="0 0 96 96">
      <path
        d="M32.38 77.703c1.405 2.985 5.616 3.082 7.157.165l24.435-46.252 9.48 18.23c1.275 2.453 4.597 2.903 6.48.876l13-14a4 4 0 00-5.863-5.444L77.93 41.12 67.549 21.155c-1.489-2.863-5.579-2.876-7.086-.023L36.207 67.045 23.619 40.297a4 4 0 00-5.944-1.552l-14 10a4 4 0 004.65 6.51l10.098-7.213L32.38 77.703z"
        fillRule="nonzero"
        fill={color}
      />
    </svg>
  );
}

export default LineChartIcon;
