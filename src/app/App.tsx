import { BoardPage } from "../pages/board/BoardPage";
import { DndProvider } from "./providers/DndProviders";
import { useBoardDnd } from "../widgets/board/useBoardDnd";

export const App = () => {
  const { handleDragEnd } = useBoardDnd();

  return (
    <DndProvider onDragEnd={handleDragEnd}>
      <BoardPage />
    </DndProvider>
  );
};
