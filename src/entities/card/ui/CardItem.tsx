import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import type { Card } from "../model/types";

interface Props {
  card: Card;
  onDelete: (id: string) => void;
}

export const CardItem = ({ card, onDelete }: Props) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: card.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="card"
    >
      <span>{card.title}</span>
      <button onClick={() => onDelete(card.id)}>✕</button>
    </div>
  );
};
