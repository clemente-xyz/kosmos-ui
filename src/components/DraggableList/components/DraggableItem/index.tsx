import React from "react";
import { createPortal } from "react-dom";
import { Draggable } from "react-beautiful-dnd";

import { useDraggableList } from "../../index";
import { getDraggableItemStyle } from "../../helpers";

import { TDraggableItemProps } from "./types";

export default function DraggableItem({
  _id,
  index,
  as: Container = "div",
  children,
  className,
  style,
}: TDraggableItemProps) {
  const { grid, inPortal } = useDraggableList();

  let portal: HTMLElement;

  if (inPortal) {
    portal = document.createElement("div");

    document.body.appendChild(portal);
  }

  return (
    <Draggable draggableId={_id} index={index}>
      {(provided, snapshot) => {
        const child = (
          <Container
            ref={provided.innerRef}
            className={className}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={{
              ...getDraggableItemStyle(
                grid,
                snapshot.isDragging,
                provided.draggableProps.style
              ),
              ...style,
            }}
          >
            {children}
          </Container>
        );

        if (!inPortal || !snapshot.isDragging) return child;

        return createPortal(child, portal);
      }}
    </Draggable>
  );
}
