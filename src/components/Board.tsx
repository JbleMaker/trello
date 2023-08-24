import React from "react";
import { InsideBoard } from "../css/styled";
import DragabbleCard from "./DragabbleCard";
import { Droppable } from "@hello-pangea/dnd";

interface IBoardProps {
  toDos: string[];
  boardId: string;
}

const Board = ({ toDos, boardId }: IBoardProps) => {
  return (
    <Droppable droppableId={boardId}>
      {(provider) => (
        <InsideBoard {...provider.droppableProps} ref={provider.innerRef}>
          {toDos.map((toDo, index) => (
            <DragabbleCard key={toDo} index={index} toDo={toDo} />
          ))}
          {provider.placeholder}
        </InsideBoard>
      )}
    </Droppable>
  );
};

export default Board;
