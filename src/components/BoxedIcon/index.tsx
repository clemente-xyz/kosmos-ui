import React from "react";

import { getStyledComponentMainStyles } from "../../utils/helpers";
import { TStyledComponentType } from "../../types";

import { MainContainer } from "./styles";

function BoxedIcon({
  type,
  icon,
}: {
  type: TStyledComponentType;
  icon: SVGElement;
}): JSX.Element {
  const mainStyles = getStyledComponentMainStyles(type);

  return <MainContainer style={mainStyles}>{icon}</MainContainer>;
}

export default BoxedIcon;
