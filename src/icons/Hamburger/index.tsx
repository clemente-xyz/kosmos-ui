import React from "react";

import { IVectorProps } from "../../types/vectors";

function HamburguerIcon({
  height = "100px",
  color = "currentColor",
  style,
}: IVectorProps) {
  return (
    <svg height={height} style={style} x="0px" y="0px" viewBox="0 0 100 100">
      <g>
        <path
          fill={color}
          d="M100,56.836H0V43.164h100V56.836z M100,17.085H0v13.672h100V17.085z M100,69.243H0v13.672h100V69.243z"
        />
      </g>
    </svg>
  );
}

export default HamburguerIcon;
