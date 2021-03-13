import { CSSProperties } from "react";

import { TSplitButtonProps } from "./types";

export function getSplitButtonStyle({
  side,
}: Pick<TSplitButtonProps, "side">): CSSProperties {
  let style: CSSProperties = {};

  switch (side) {
    case "left":
      style = {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        paddingRight: 8,
      };

      break;

    case "middle":
      style = { borderRadius: 0, paddingRight: 8, paddingLeft: 8 };

      break;

    case "right":
      style = {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        paddingLeft: 8,
      };

      break;
  }

  return style;
}
