import type { DragEndEvent } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import { useCallback } from "react";
import type { Card } from "../../entities/card/model/types";

let setCardsRef: React.Dispatch<React.SetStateAction<Card[]>>;

export const registerCardsSetter = (
  setter: React.Dispatch<React.SetStateAction<Card[]>>
) => {
  setCardsRef = setter;
};

export const useBoardDnd = () => {
  const handleDragEnd = useCallback((event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    setCardsRef((prev) => {
      const oldIndex = prev.findIndex((c) => c.id === active.id);
      const newIndex = prev.findIndex((c) => c.id === over.id);

      const updated = [...prev];

      if (updated[oldIndex].columnId !== updated[newIndex].columnId) {
        updated[oldIndex] = {
          ...updated[oldIndex],
          columnId: updated[newIndex].columnId,
        };
      }

      return arrayMove(updated, oldIndex, newIndex);
    });
  }, []);

  return { handleDragEnd };
};
