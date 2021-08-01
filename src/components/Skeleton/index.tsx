import React from "react";

import { TSkeletonProps } from "./types";
import { Container } from "./styles";

export default function Skeleton({
  variant = "square",
  height = 32,
  width = 32,
  className,
  style,
  children,
}: TSkeletonProps) {
  return (
    <Container
      className={className}
      style={style}
      variant={variant}
      height={height}
      width={width}
    >
      {children}
    </Container>
  );
}
