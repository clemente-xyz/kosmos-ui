import React, { createContext, useContext } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

import DraggableItem from "./components/DraggableItem";
import {
  TDraggableListContext,
  TDraggableList,
  TDraggableListProps,
} from "./types";
import { reorderDndItems } from "./helpers";
import DroppableZone from "./components/DroppableZone";

const DraggableListContext = createContext({
  direction: "vertical",
  grid: 0,
} as TDraggableListContext);
DraggableListContext.displayName = "DraggableListContext";

export function useDraggableList() {
  return useContext(DraggableListContext);
}

export default function DraggableList<T = {}>({
  items,
  setItems,
  direction = "vertical",
  inPortal = false,
  grid = 0,
  onDrop: onDropExternal,
  children,
}: TDraggableListProps<T>) {
  function onDrop(result: DropResult) {
    if (!result.destination) {
      return;
    }

    const orderedItems = reorderDndItems<T>(
      items,
      result.source.index,
      result.destination.index
    );

    setItems(orderedItems);

    onDropExternal && onDropExternal(orderedItems);
  }

  return ((
    <DraggableListContext.Provider value={{ direction, inPortal, grid }}>
      <DragDropContext onDragEnd={onDrop}>{children}</DragDropContext>
    </DraggableListContext.Provider>
  ) as unknown) as TDraggableList;
}

DraggableList.Item = DraggableItem;
DraggableList.Dropzone = DroppableZone;
