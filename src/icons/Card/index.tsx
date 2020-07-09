import React from "react";

import { IconProps } from "../types";

function CardIcon({
  height = "20px",
  color = "currentColor",
  style,
}: IconProps) {
  return (
    <svg height={height} style={style} viewBox="0 0 32 32">
      <path
        fill={color}
        d="M29 10a3 3 0 00-3-3H6a3 3 0 00-3 3v1h26zM3 22a3 3 0 003 3h20a3 3 0 003-3v-9H3zm4-5h2a1 1 0 010 2H7a1 1 0 010-2zm0 3h6a1 1 0 010 2H7a1 1 0 010-2z"
      />
    </svg>
  );
}

export default CardIcon;
