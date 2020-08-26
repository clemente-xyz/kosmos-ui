import React from "react";

import { IVectorProps } from "../../types";

function LayersIcon({
  height = "80px",
  color,
  style,
  className,
}: IVectorProps) {
  return (
    <svg
      height={height}
      viewBox="0 0 64 80"
      style={style}
      className={className}
    >
      <path
        fill={color}
        d="M55.9 44.14a2 2 0 01-1.27 2.53l-20.11 6.68c-1.64.54-3.4.54-5.04 0L9.37 46.67a2 2 0 010-3.8l3.99-1.32 14.23 4.72c2.86.95 5.96.95 8.82 0l14.23-4.72 3.99 1.32c.6.2 1.07.67 1.27 1.27zM55.9 31.37a2 2 0 01-1.27 2.53l-20.11 6.68c-1.64.54-3.4.54-5.04 0L9.37 33.9a2 2 0 010-3.8l3.99-1.32 14.23 4.72c2.86.95 5.96.95 8.82 0l14.23-4.72 3.99 1.32c.6.2 1.07.67 1.27 1.27zM55.9 18.6a2 2 0 01-1.27 2.53l-20.11 6.68c-1.64.54-3.4.54-5.04 0L9.37 21.13a2 2 0 010-3.8l20.11-6.68c1.64-.54 3.4-.54 5.04 0l20.11 6.68c.6.2 1.07.67 1.27 1.27z"
      />
    </svg>
  );
}

export default LayersIcon;
