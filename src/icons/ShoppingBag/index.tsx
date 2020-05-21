import React from "react";

import { IconProps } from "../types";

function ShoppingBagIcon({ height, color }: IconProps) {
  return (
    <svg height={height} viewBox="0 0 20 20">
      <g fill="none" fillRule="evenodd">
        <g transform="translate(3 2)">
          <path
            d="m0 5h15v7.8333c0 1.6569-1.3431 3-3 3h-9c-1.6569 0-3-1.3431-3-3l-4.4409e-16 -7.8333z"
            fill={color}
          />
          <path
            d="m10.833 5.8926c0-3.2544-1.4924-5.8926-3.3333-5.8926s-3.3333 2.6382-3.3333 5.8926 6.6667 3.2544 6.6667 0z"
            stroke={color}
            strokeWidth="1.8"
          />
        </g>
      </g>
    </svg>
  );
}

export default ShoppingBagIcon;
