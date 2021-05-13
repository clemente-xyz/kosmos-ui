import React from "react";

import { TVectorProps } from "../../types/vectors";
import { DEFAULT_VECTOR_COLORS } from "../../utils/constants";

function DeliveryIcon({
  height = "24px",
  colors = DEFAULT_VECTOR_COLORS,
  style,
}: TVectorProps) {
  return (
    <svg height={height} viewBox="0 0 16 16" style={style}>
      <g fill="none">
        <path
          d="M13.587 3.164h.33l.342.16c.337.16.741.64.741 1.09v7.066c0 .366-.404.7-.741.861l-5.726 2.77c-.123.058-.258.087-.533.087V9.181H2.66V3.848l7.044-2.593.117-.11L12.3 2.346l-.336.835 1.624-.017z"
          fill={colors.default}
        />
        <path
          d="M8 6.914v8.247s-.546.022-.715-.051l-5.752-2.754A.951.951 0 0 1 1 11.495V4.2a.95.95 0 0 1 .533-.86L7.637.458a.883.883 0 0 1 .767 0l1.753.838-6.913 3.307a.467.467 0 0 0-.257.42l.007 2.03 2.008 1.032V5.991a.467.467 0 0 1 .255-.419l6.906-3.313 1.991.953c.188.093.35.268.506.427z"
          fill={colors.light}
        />
      </g>
    </svg>
  );
}

export default DeliveryIcon;
