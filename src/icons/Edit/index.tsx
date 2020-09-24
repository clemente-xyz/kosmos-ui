import React from "react";

import { colorsPalette } from "../../theme/colors";
import { IVectorProps } from "../../types";

function EditIcon({
  height = "16",
  primaryColor = colorsPalette.blue.light,
  secondaryColor = colorsPalette.blue.default,
  style,
}: IVectorProps) {
  return (
    <svg height={height} viewBox="0 0 111 94" style={style}>
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="noun_write_3406705" fillRule="nonzero">
          <g id="Group">
            <path
              d="M47.6019391,72.7776474 L50.0019391,88.6776474 C50.3019391,90.8776474 53.0019391,91.6776474 54.5019391,90.1776474 L65.8019391,78.7776474 C67.6019391,76.9776474 68.9019391,74.8776474 70.0019391,72.6776474 L47.8019391,65.2776474 C47.4019391,67.7776474 47.2019391,70.2776474 47.6019391,72.7776474 Z"
              id="Path"
              fill={primaryColor}
              transform="translate(58.692922, 78.111816) rotate(17.000000) translate(-58.692922, -78.111816) "
            />
            <path
              d="M101.083905,19.3776474 C102.083905,16.2776474 100.383905,12.9776474 97.3839051,11.9776474 L85.5839051,8.0776474 C82.4839051,7.0776474 79.1839051,8.7776474 78.1839051,11.7776474 L59.3839051,68.7776474 L82.3839051,76.3776474 L101.083905,19.3776474 Z"
              id="Path"
              fill={primaryColor}
              transform="translate(80.377594, 42.083958) rotate(17.000000) translate(-80.377594, -42.083958) "
            />
            <path
              d="M49.1393502,23.7 L4.46064982,23.7 C2.48953069,23.7 0.8,26.0538462 0.8,29.1 C0.8,32.1461538 2.39566787,34.5 4.46064982,34.5 L49.1393502,34.5 C51.1104693,34.5 52.8,32.1461538 52.8,29.1 C52.8,26.0538462 51.2043321,23.7 49.1393502,23.7 Z"
              id="Path"
              fill={secondaryColor}
            />
            <path
              d="M1,5.4 C1,8.30769231 3.29424779,10.8 6.26327434,10.8 L56.7367257,10.8 C59.5707965,10.8 62,8.44615385 62,5.4 C62,2.35384615 59.7057522,0 56.7367257,0 L6.26327434,0 C3.29424779,0 1,2.35384615 1,5.4 Z"
              id="Path"
              fill={secondaryColor}
            />
            <path
              d="M1,52.4 C1,55.3076923 2.7300885,57.8 4.96902655,57.8 L43.0309735,57.8 C45.1681416,57.8 47,55.4461538 47,52.4 C47,49.3538462 45.2699115,47 43.0309735,47 L4.96902655,47 C2.7300885,47 1,49.3538462 1,52.4 Z"
              id="Path"
              fill={secondaryColor}
            />
          </g>
        </g>
      </g>
    </svg>
  );
}

export default EditIcon;
