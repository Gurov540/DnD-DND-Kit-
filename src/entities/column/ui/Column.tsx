import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import type { Card } from "../../card/model/types";
import { CardItem } from "../../card/ui/CardItem";

interface Props {
  id: string;
  title: string;
  cards: Card[];
  onAdd: (columnId: string) => void;
  onDelete: (cardId: string) => void;
}

export const Column = ({ id, title, cards, onAdd, onDelete }: Props) => {
  return (
    <div className="column">
      <h3>{title}</h3>

      <SortableContext
        items={cards.map((c) => c.id)}
        strategy={verticalListSortingStrategy}
      >
        {cards.map((card) => (
          <CardItem key={card.id} card={card} onDelete={onDelete} />
        ))}
      </SortableContext>

      <button onClick={() => onAdd(id)}>+ Add card</button>
    </div>
  );
};
