import React from "react";

import { TVectorProps } from "../../types/vectors";

export default function MailIcon({
  height = "24px",
  color = "currentColor",
  style,
  className,
}: TVectorProps) {
  return (
    <svg
      height={height}
      className={className}
      style={style}
      viewBox="0 0 32 32"
    >
      <path
        fill={color}
        d="M26,6H6a3.96,3.96,0,0,0-2.592.979c-.014.008-.024.021-.037.03A3.975,3.975,0,0,0,2,10V22a4,4,0,0,0,4,4H26a4,4,0,0,0,4-4V10A4,4,0,0,0,26,6Zm0,2c.059,0,.114.012.171.017L16.005,14.8,5.988,8H26Zm2,14a2,2,0,0,1-2,2H6a2,2,0,0,1-2-2V10a2,2,0,0,1,.175-.811l11.263,7.639a1,1,0,0,0,1.117,0l11.309-7.54A1.986,1.986,0,0,1,28,10Z"
      />
    </svg>
  );
}
