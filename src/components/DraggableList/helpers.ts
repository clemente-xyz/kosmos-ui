import { CSSProperties } from "react";
import { DraggingStyle, NotDraggingStyle } from "react-beautiful-dnd";

import theme from "../../theme";

export function reorderDndItems<T = {}>(
  array: (T & { id: string })[],
  startIndex: number,
  endIndex: number
) {
  const result = Array.from(array);

  const [removed] = result.splice(startIndex, 1);

  result.splice(endIndex, 0, removed);

  return result;
}

export function getDroppableZoneStyle(grid: number, _: boolean): CSSProperties {
  return {
    display: "flex",
    padding: grid,
  };
}

export function getDraggableItemStyle(
  grid: number,
  isDragging: boolean,
  draggableStyle?: DraggingStyle | NotDraggingStyle
): CSSProperties {
  return {
    width: 100,
    height: 100,
    userSelect: "none",
    padding: grid,
    margin: `0 ${grid}px 0 0`,
    borderRadius: 4,
    border: `2px solid ${
      isDragging
        ? theme.colorsPalette.blue.default
        : theme.colorsPalette.gray.lighter
    }`,
    ...draggableStyle,
  };
}
