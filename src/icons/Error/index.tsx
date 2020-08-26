import React from "react";

import { IVectorProps } from "../../types";

function ErrorIcon({
  height = "52px",
  color = "currentColor",
  style,
}: IVectorProps) {
  return (
    <svg height={height} style={style} x="0px" y="0px" viewBox="0 0 512 512">
      <g>
        <path
          fill={color}
          d="M256,0C114.833,0,0,114.844,0,256s114.833,256,256,256s256-114.844,256-256S397.167,0,256,0z M256,426.667
          c-11.771,0-21.333-9.573-21.333-21.333c0-11.76,9.563-21.333,21.333-21.333s21.333,9.573,21.333,21.333
          C277.333,417.094,267.771,426.667,256,426.667z M277.333,352c0,5.896-4.771,10.667-10.667,10.667h-21.333
          c-5.896,0-10.667-4.771-10.667-10.667V96c0-5.896,4.771-10.667,10.667-10.667h21.333c5.896,0,10.667,4.771,10.667,10.667V352z"
        />
      </g>
    </svg>
  );
}

export default ErrorIcon;
