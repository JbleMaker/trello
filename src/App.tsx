import React from "react";
import { useRecoilState } from "recoil";
import { styled } from "styled-components";
import { DragDropContext, Droppable, DropResult } from "@hello-pangea/dnd";
import { toDoState } from "./atoms";
import { Boards, Wrapper } from "./css/styled";
import DragabbleCard from "./components/DragabbleCard";
import Board from "./components/Board";

function App() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const onDragEnd = ({ draggableId, destination, source }: DropResult) => {
    // if (!destination) return;
    // setToDos((oldToDos) => {
    //   const copy = [...oldToDos];
    //   copy.splice(source.index, 1);
    //   copy.splice(destination?.index, 0, draggableId);
    //   return copy;
    // });
  };
  return (
    <div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Wrapper>
          <Boards>
            {Object.keys(toDos).map((boardId) => (
              <Board boardId={boardId} key={boardId} toDos={toDos[boardId]} />
            ))}
          </Boards>
        </Wrapper>
      </DragDropContext>
    </div>
  );
}

export default App;
