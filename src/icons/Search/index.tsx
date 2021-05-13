import React from "react";

import { TVectorProps } from "../../types/vectors";

export default function SearchIcon({
  height = "100px",
  color = "currentColor",
  style,
}: TVectorProps) {
  return (
    <svg
      height={height}
      style={style}
      x="0px"
      y="0px"
      viewBox="0 0 100 100"
      fillRule="evenodd"
      clipRule="evenodd"
    >
      <g>
        <path
          fill={color}
          fillRule="nonzero"
          d="M91.9,91.9c-3.5,3.5-9.2,3.5-12.7,0L62.7,75.4C56.9,79,50.1,81,42.7,81C21.6,81,4.5,63.9,4.5,42.7  S21.6,4.5,42.7,4.5S81,21.6,81,42.7c0,7.3-2.1,14.1-5.6,20l16.5,16.5C95.4,82.7,95.4,88.4,91.9,91.9z M42.7,15.7  c-14.9,0-27,12.1-27,27s12.1,27,27,27s27-12.1,27-27S57.7,15.7,42.7,15.7z"
        />
      </g>
    </svg>
  );
}
