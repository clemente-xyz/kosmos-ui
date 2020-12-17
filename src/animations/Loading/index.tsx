import React from "react";

import theme from "../../theme";

import { MainContainer } from "./styles";

function LoadingAnimation({
  color = theme.colorsPalette.blue.default,
}: {
  color?: string;
}) {
  return <MainContainer color={color} />;
}

export default LoadingAnimation;
