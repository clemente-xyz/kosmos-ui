import React from "react";

import { colorsPalette } from "../../theme/colors";
import { IVectorProps } from "../../types";

function ProductLabelsIcon({
  height = "493",
  primaryColor = colorsPalette.blue.light,
  secondaryColor = colorsPalette.blue.default,
  style,
}: IVectorProps) {
  return (
    <svg height={height} viewBox="0 0 499 493" style={style}>
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="coupon-(1)" fillRule="nonzero">
          <path
            d="M395.237,-1.42108547e-14 L469.976,74.739 C494.815,99.578 494.815,139.85 469.976,164.689 L395.237,239.428 L26.015,239.428 C11.648,239.428 0.001,227.781 0.001,213.414 L0.001,26.014 C0.001,11.647 11.648,-1.42108547e-14 26.015,-1.42108547e-14 L395.237,-1.42108547e-14 Z"
            id="XMLID_2545_"
            fill={primaryColor}
          />
          <path
            d="M322.7,54.006 L464.385,54.006 C475.17,64.791 481.217,70.838 492.002,81.623 L492.002,223.308 L230.922,484.387 C220.763,494.546 204.292,494.546 194.133,484.387 L61.621,351.875 C51.462,341.716 51.462,325.245 61.621,315.086 L322.7,54.006 Z"
            id="XMLID_2483_"
            fill={secondaryColor}
          />
          <circle
            id="XMLID_2590_"
            fill={primaryColor}
            cx="428.001"
            cy="118.006"
            r="20"
          />
          <path
            d="M484.58654,45.8070545 C481.285821,44.0887862 477.099008,45.1625456 475.235534,48.2078184 L430.965136,120.543494 C429.101662,123.588766 430.266419,127.450122 433.567824,129.169023 C434.634432,129.724263 435.792326,129.988271 436.935806,129.988271 C439.331212,129.988271 441.657295,128.829674 442.91883,126.768259 L487.189227,54.4325839 C489.052702,51.3873111 487.887944,47.5253227 484.58654,45.8070545 Z"
            id="XMLID_1533_"
            fill={primaryColor}
            transform="translate(459.077182, 87.488271) rotate(15.000000) translate(-459.077182, -87.488271) "
          />
        </g>
      </g>
    </svg>
  );
}

export default ProductLabelsIcon;
