import React from "react";

import { TVectorProps } from "../../types/vectors";

export default function ItalicIcon({
  height = "14px",
  color = "currentColor",
  style,
}: TVectorProps) {
  return (
    <svg height={height} viewBox="0 0 10 13" fill="none" style={style}>
      <path
        d="M4.07146 0.25C3.72004 0.25 3.42861 0.541429 3.42861 0.892858C3.42861 1.24429 3.72004 1.53572 4.07146 1.53572H5.46861L3.11146 10.9643H1.50004C1.14861 10.9643 0.857178 11.2557 0.857178 11.6071C0.857178 11.9586 1.14861 12.25 1.50004 12.25H6.21432C6.56575 12.25 6.85718 11.9586 6.85718 11.6071C6.85718 11.2557 6.56575 10.9643 6.21432 10.9643H4.82575L7.18289 1.53572H8.78575C9.13718 1.53572 9.42861 1.24429 9.42861 0.892858C9.42861 0.541429 9.13718 0.25 8.78575 0.25H4.07146Z"
        fill={color}
      />
    </svg>
  );
}
