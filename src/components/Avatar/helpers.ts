import { darken } from "polished";

import { TAvatarProps } from "./types";
import {
  getColorFormString,
  getTextFromReactChildren,
} from "../../utils/helpers";

export function getAvatarChildrenProps({
  children,
  withInitials,
  src,
  alt,
  height,
  style,
}: TAvatarProps) {
  const childrenText = getTextFromReactChildren(children);

  if (!src && withInitials && !!childrenText) {
    const backgroundColor = getColorFormString(childrenText);
    const color = darken(0.2, backgroundColor);

    return {
      style: {
        backgroundColor,
        color,
        height,
        width: height,
        ...style,
      },
      children: `${childrenText.split(" ")[0][0]}${
        childrenText.split(" ")[1][0]
      }`,
    };
  }

  return {
    src,
    alt,
    style: {
      height: (height as number) + 16,
      width: (height as number) + 16,
      ...style,
    },
  };
}
