import React from "react";

import { IconProps } from "../types";

function DeliveryIcon({
  height = "20px",
  color = "currentColor",
  style,
}: IconProps) {
  return (
    <svg height={height} style={style} viewBox="0 0 100 100">
      <g>
        <path
          fill={color}
          d="M5273.1 2400.1v-2c0-2.8-5-4-9.7-4s-9.7 1.3-9.7 4v2c0 1.8.7 3.6 2 4.9l5 4.9c.3.3.4.6.4 1v6.4c0 .4.2.7.6.8l2.9.9c.5.1 1-.2 1-.8v-7.2c0-.4.2-.7.4-1l5.1-5c1.3-1.3 2-3.1 2-4.9zm-9.7-.1c-4.8 0-7.4-1.3-7.5-1.8.1-.5 2.7-1.8 7.5-1.8s7.3 1.3 7.5 1.8c-.2.5-2.7 1.8-7.5 1.8z"
        />
        <path
          fill={color}
          d="M5268.4 2410.3c-.6 0-1 .4-1 1s.4 1 1 1h4.3c.6 0 1-.4 1-1s-.4-1-1-1h-4.3zM5272.7 2413.7h-4.3c-.6 0-1 .4-1 1s.4 1 1 1h4.3c.6 0 1-.4 1-1s-.4-1-1-1zM5272.7 2417h-4.3c-.6 0-1 .4-1 1s.4 1 1 1h4.3c.6 0 1-.4 1-1 0-.5-.4-1-1-1z"
        />
        <g>
          <path
            fill={color}
            d="M95.1 49.7l-6.4-1.3-3-9.1c-1.1-3.2-4.1-5.4-7.5-5.4h-5.1v-4.7c0-1.7-1.4-3-3-3H30.4c-1.7 0-3 1.4-3 3v33c0 1.7 1.4 3 3 3h3.3c0 4.8 3.9 8.6 8.6 8.6s8.6-3.9 8.6-8.6h23c0 4.8 3.9 8.6 8.6 8.6 4.8 0 8.6-3.9 8.6-8.6h3.3c1.7 0 3-1.4 3-3v-9.6c.1-1.4-.9-2.6-2.3-2.9zM42.3 69.3c-2.2 0-4.1-1.8-4.1-4.1 0-2.2 1.8-4.1 4.1-4.1s4.1 1.8 4.1 4.1-1.8 4.1-4.1 4.1zm30.8-21.7v-9.2h5.1c1.4 0 2.7.9 3.2 2.3l2.3 6.9H73.1zm9.5 21.7c-2.2 0-4.1-1.8-4.1-4.1 0-2.2 1.8-4.1 4.1-4.1 2.2 0 4.1 1.8 4.1 4.1-.1 2.3-1.9 4.1-4.1 4.1zM20.1 33.2H4.9c-1.3 0-2.4 1.1-2.4 2.4S3.6 38 4.9 38h15.2c1.3 0 2.4-1.1 2.4-2.4s-1-2.4-2.4-2.4zM20.1 43.3H8.7c-1.3 0-2.4 1.1-2.4 2.4 0 1.3 1.1 2.4 2.4 2.4h11.4c1.3 0 2.4-1.1 2.4-2.4.1-1.4-1-2.4-2.4-2.4zM20.1 53.3h-7.6c-1.3 0-2.4 1.1-2.4 2.4s1.1 2.4 2.4 2.4h7.6c1.3 0 2.4-1.1 2.4-2.4s-1-2.4-2.4-2.4z"
          />
        </g>
      </g>
    </svg>
  );
}

export default DeliveryIcon;