import React, { ReactNode } from "react";

import { getStyledComponentMainStyles } from "../../utils/helpers";

import { MainContainer } from "./styles";

function BoxedIcon({
  type,
  icon,
}: {
  type: TComponentType;
  icon: ReactNode;
}): JSX.Element {
  const mainStyles = getStyledComponentMainStyles(type);

  return <MainContainer style={mainStyles}>{icon}</MainContainer>;
}

export default BoxedIcon;
