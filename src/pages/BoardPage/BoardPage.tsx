import React, { useState } from "react";
import { DndContext } from "@dnd-kit/core";
import { DraggableCard } from "../../components/DraggableCard";
import { DroppableColumn } from "../../components/DroppableColumn";

function Example() {
  const [parent, setParent] = useState(null);
  const draggable = (
    <DraggableCard id="draggable">Go ahead, drag me.</DraggableCard>
  );

  return (
    <DndContext onDragEnd={handleDragEnd}>
      {!parent ? draggable : null}
      <DroppableColumn id="droppable">
        {parent === "droppable" ? draggable : "Drop here"}
      </DroppableColumn>
    </DndContext>
  );

  function handleDragEnd({ over }) {
    setParent(over ? over.id : null);
  }
}
