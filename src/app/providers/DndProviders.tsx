import { DndContext, closestCenter } from "@dnd-kit/core";
import type { DragEndEvent } from "@dnd-kit/core";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onDragEnd: (event: DragEndEvent) => void;
}

export const DndProvider = ({ children, onDragEnd }: Props) => {
  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>
      {children}
    </DndContext>
  );
};
