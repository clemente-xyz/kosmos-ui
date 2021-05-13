import React from "react";

import { TVectorProps } from "../../types/vectors";
import { DEFAULT_VECTOR_COLORS } from "../../utils/constants";

function HomeIcon({
  height = "24px",
  colors = DEFAULT_VECTOR_COLORS,
  style,
}: TVectorProps) {
  return (
    <svg height={height} viewBox="0 0 16 16" style={style}>
      <g fill="none">
        <path
          d="M9.5 15.035V11.63a.6.6 0 0 0-.607-.596H7.107a.604.604 0 0 0-.607.596v3.405h-4a.998.998 0 0 1-1-.998V7.032c0-.381.218-.729.56-.896l5.96-4.9 5.896 4.889a.997.997 0 0 1 .584.907v7.005a.998.998 0 0 1-.999.998zM8 8.835a1.3 1.3 0 1 0 0-2.6 1.3 1.3 0 0 0 0 2.6z"
          fill={colors.light}
        />
        <path
          d="M8.002 1.004a.403.403 0 0 0-.307.085L.552 6.873a.4.4 0 0 0-.06.57l.75.925c.138.17.395.2.568.06l6.192-5.015 6.193 5.015c.173.14.43.11.57-.06l.748-.926a.4.4 0 0 0-.06-.57L8.31 1.09a.403.403 0 0 0-.308-.085z"
          fill={colors.default}
        />
      </g>
    </svg>
  );
}

export default HomeIcon;
