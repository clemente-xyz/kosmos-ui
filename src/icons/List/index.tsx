import React from "react";

import { IconProps } from "../types";

function ListIcon({
  height = "20px",
  color = "currentColor",
  style,
}: IconProps) {
  return (
    <svg height={height} style={style} viewBox="0 0 24 24">
      <path
        fill={color}
        d="M5 2h14a3 3 0 013 3v14a3 3 0 01-3 3H5a3 3 0 01-3-3V5a3 3 0 013-3zm2 7h10a1 1 0 000-2H7a1 1 0 100 2zm0 4h10a1 1 0 000-2H7a1 1 0 000 2zm0 4h5a1 1 0 000-2H7a1 1 0 000 2z"
        fillRule="nonzero"
      />
    </svg>
  );
}

export default ListIcon;
