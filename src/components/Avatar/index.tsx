import React from "react";

import { getAvatarChildrenProps } from "./helpers";
import { TAvatarProps } from "./types";
import { AvatarFallback, AvatarImg } from "./styles";

export default function Avatar({
  height = 24,
  withInitials = false,
  ...props
}: TAvatarProps) {
  const childrenProps = getAvatarChildrenProps({
    withInitials,
    height,
    ...props,
  });

  const children = props.src ? (
    <AvatarImg {...childrenProps} />
  ) : (
    <AvatarFallback {...childrenProps} />
  );

  return <>{children}</>;
}
