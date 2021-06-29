import React from "react";

import { TVectorProps } from "../../types/vectors";

export default function UListIcon({
  height = "14px",
  color = "currentColor",
  style,
}: TVectorProps) {
  return (
    <svg height={height} viewBox="0 0 18 13" fill="none" style={style}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.11792 1.70001C6.11792 1.42387 6.34178 1.20001 6.61792 1.20001H16.5179C16.7941 1.20001 17.0179 1.42387 17.0179 1.70001C17.0179 1.97615 16.7941 2.20001 16.5179 2.20001H6.61792C6.34178 2.20001 6.11792 1.97615 6.11792 1.70001Z"
        fill={color}
      />
      <circle cx="1.81792" cy="1.7" r="0.7" fill={color} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.11792 6.5C6.11792 6.22386 6.34178 6 6.61792 6H16.5179C16.7941 6 17.0179 6.22386 17.0179 6.5C17.0179 6.77614 16.7941 7 16.5179 7H6.61792C6.34178 7 6.11792 6.77614 6.11792 6.5Z"
        fill={color}
      />
      <circle cx="1.81792" cy="6.49999" r="0.7" fill={color} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.11792 11.3C6.11792 11.0238 6.34178 10.8 6.61792 10.8H16.5179C16.7941 10.8 17.0179 11.0238 17.0179 11.3C17.0179 11.5761 16.7941 11.8 16.5179 11.8H6.61792C6.34178 11.8 6.11792 11.5761 6.11792 11.3Z"
        fill={color}
      />
      <circle cx="1.81792" cy="11.3" r="0.7" fill={color} />
    </svg>
  );
}
