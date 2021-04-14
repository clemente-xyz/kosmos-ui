import React, { ReactNode } from "react";

import { TComponentType } from "../../types/components";
import { getStyledComponentMainStyles } from "../../utils/helpers";

import { MainContainer } from "./styles";

export default function BoxedIcon({
  type,
  icon,
}: {
  type: TComponentType;
  icon: ReactNode;
}): JSX.Element {
  const mainStyles = getStyledComponentMainStyles(type);

  return <MainContainer style={mainStyles}>{icon}</MainContainer>;
}
