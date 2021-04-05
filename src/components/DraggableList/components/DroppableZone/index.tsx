import React from "react";
import { Droppable } from "react-beautiful-dnd";

import { useDraggableList } from "../../index";
import { getDroppableZoneStyle } from "../../helpers";

import { TDroppableZoneProps } from "./types";

export default function DroppableZone({
  children,
  as: Container = "aside",
  style,
  className,
}: TDroppableZoneProps) {
  const { direction, grid } = useDraggableList();

  return (
    <Droppable droppableId="list" direction={direction}>
      {(provided, snapshot) => {
        return (
          <Container
            ref={provided.innerRef}
            className={className}
            style={{
              ...style,
              ...getDroppableZoneStyle(grid, snapshot.isDraggingOver),
            }}
            {...provided.droppableProps}
          >
            {children}

            {provided.placeholder}
          </Container>
        );
      }}
    </Droppable>
  );
}
