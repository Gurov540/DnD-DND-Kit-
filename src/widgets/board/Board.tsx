import { useEffect, useState } from "react";
import { Column } from "../../entities/column/ui/Column";
import type { Card } from "../../entities/card/model/types";
import type { Column as ColumnType } from "../../entities/column/model/types";
import { loadState, saveState } from "../../shared/lib/storage";
import { registerCardsSetter } from "./useBoardDnd";

const STORAGE_KEY = "kanban-board";

const initialColumns: ColumnType[] = [
  { id: "todo", title: "Todo" },
  { id: "in-progress", title: "In Progress" },
  { id: "done", title: "Done" },
];

export const Board = () => {
  const [columns] = useState(initialColumns);
  const [cards, setCards] = useState<Card[]>(() => loadState(STORAGE_KEY, []));

  useEffect(() => {
    registerCardsSetter(setCards);
  }, []);

  useEffect(() => {
    saveState(STORAGE_KEY, cards);
  }, [cards]);

  const handleAddCard = (columnId: string) => {
    const title = prompt("Card title");
    if (!title) return;

    setCards((prev) => [...prev, { id: crypto.randomUUID(), title, columnId }]);
  };

  const handleDeleteCard = (id: string) => {
    setCards((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <div className="columns">
      {columns.map((col) => (
        <Column
          key={col.id}
          id={col.id}
          title={col.title}
          cards={cards.filter((c) => c.columnId === col.id)}
          onAdd={handleAddCard}
          onDelete={handleDeleteCard}
        />
      ))}
    </div>
  );
};
