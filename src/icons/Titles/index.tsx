import React from "react";

import { TVectorProps } from "../../types/vectors";

export default function TitlesIcon({
  height = "14px",
  color = "currentColor",
  style,
}: TVectorProps) {
  return (
    <svg height={height} viewBox="0 0 1024 1024" fill="none" style={style}>
      <path
        fill={color}
        d="M56.888889 56.888889h682.666667v113.777778H56.888889zM512 512h455.111111v113.777778H512zM341.333333 170.666667h113.777778v796.444444H341.333333z"
      />
      <path
        fill={color}
        d="M682.666667 568.888889h113.777777v398.222222h-113.777777z"
      />
    </svg>
  );
}
