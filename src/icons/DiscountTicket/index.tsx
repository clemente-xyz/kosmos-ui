import React from "react";

import { IVectorProps } from "../../types";

function DiscountTicket({
  height = "20px",
  color = "currentColor",
  style,
}: IVectorProps) {
  return (
    <svg height={height} viewBox="0 0 512 512" fill={color} style={style}>
      <g>
        <g>
          <circle cx="368" cy="320" r="16" />
        </g>
      </g>
      <g>
        <g>
          <path
            d="M480,80H160v32h-32V80H32C14.368,80,0,94.368,0,112v80c0,8.832,7.168,16,16,16c26.464,0,48,21.536,48,48s-21.536,48-48,48
			c-8.832,0-16,7.168-16,16v80c0,17.952,14.048,32,32,32h96v-32h32v32h320c17.952,0,32-14.048,32-32V112
			C512,94.048,497.952,80,480,80z M160,368h-32v-32h32V368z M160,304h-32v-32h32V304z M160,240h-32v-32h32V240z M160,176h-32v-32h32
			V176z M272,144c26.464,0,48,21.536,48,48s-21.536,48-48,48s-48-21.536-48-48S245.536,144,272,144z M240,368
			c-3.616,0-7.232-1.216-10.24-3.712c-6.784-5.664-7.712-15.744-2.048-22.528l160-192c5.696-6.816,15.776-7.648,22.528-2.048
			c6.784,5.664,7.68,15.744,2.016,22.56l-160,192C249.12,366.016,244.576,368,240,368z M368,368c-26.464,0-48-21.536-48-48
			s21.536-48,48-48s48,21.536,48,48S394.464,368,368,368z"
          />
        </g>
      </g>
      <g>
        <g>
          <circle cx="272" cy="192" r="16" />
        </g>
      </g>
    </svg>
  );
}

export default DiscountTicket;