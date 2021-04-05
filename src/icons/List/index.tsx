import React from "react";

import { colorsPalette } from "../../theme/colors";
import { IVectorProps } from "../../types/vectors";

function ListIcon({
  height = "24px",
  primaryColor = colorsPalette.blue.light,
  secondaryColor = colorsPalette.blue.default,
  style,
}: IVectorProps) {
  return (
    <svg height={height} style={style} viewBox="0 0 24 24">
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="noun_List_2262524" fillRule="nonzero">
          <path
            d="M2.7041667,0.5875 C1.5452653,0.5875 0.5875,1.54476 0.5875,2.70366 L0.5875,21.75417 C0.5875,22.91307 1.5452653,23.87083 2.7041667,23.87083 L21.754167,23.87083 C22.913068,23.87083 23.870833,22.91307 23.870833,21.75417 L23.870833,2.70366 C23.870833,1.54476 22.913068,0.5875 21.754167,0.5875 L2.7041667,0.5875 Z"
            id="Path"
            fill={secondaryColor}
          />
          <path
            d="M6.11847323,6.00019851 L17.8815268,6.00019851 C19.3728244,5.97166685 19.3728244,9.02829536 17.8815268,8.99980149 L6.11847323,8.99980149 C4.62717559,9.02833315 4.62717559,5.97170464 6.11847323,6.00019851 Z"
            id="Path"
            fill={primaryColor}
          />
          <path
            d="M6.11847323,10.8795686 L17.8815268,10.8795686 C19.3728244,10.851037 19.3728244,13.9076844 17.8815268,13.8791716 L6.11847323,13.8791716 C4.62717559,13.9077033 4.62717559,10.8510748 6.11847323,10.8795686 Z"
            id="Path"
            fill={primaryColor}
          />
          <path
            d="M5.89122345,15.8570536 L14.2934046,15.8570536 C15.3586171,15.8285219 15.3586171,18.8851504 14.2934046,18.8566565 L5.89122345,18.8566565 C4.82601085,18.8851882 4.82601085,15.8285597 5.89122345,15.8570536 Z"
            id="Path"
            fill={primaryColor}
          />
        </g>
      </g>
    </svg>
  );
}

export default ListIcon;
