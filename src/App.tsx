import React from "react";
import { useRecoilState } from "recoil";
import { styled } from "styled-components";
import { DragDropContext, Droppable, DropResult } from "@hello-pangea/dnd";
import { toDoState } from "./atoms";
import { Boards, Title, Wrapper } from "./css/styled";
import Board from "./components/Board";

function App() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const onDragEnd = (info: DropResult) => {
    console.log(info);
    const { draggableId, destination, source } = info;

    if (!destination) return;

    if (destination?.droppableId === source.droppableId) {
      //같은 보드내에서의 이동
      setToDos((allBoard) => {
        const boardCopy = [...allBoard[source.droppableId]];
        const taskObj = boardCopy[source.index];
        boardCopy.splice(source.index, 1);
        boardCopy.splice(destination?.index, 0, taskObj);
        return {
          ...allBoard,
          [source.droppableId]: boardCopy,
        };
      });
    }

    if (destination.droppableId !== source.droppableId) {
      //다른보드로의 이동
      setToDos((allBoards) => {
        const sourceBoard = [...allBoards[source.droppableId]];
        const destinationCopy = [...allBoards[destination.droppableId]];
        const taskObj = sourceBoard[source.index];
        sourceBoard.splice(source.index, 1);
        destinationCopy.splice(destination?.index, 0, taskObj);
        return {
          ...allBoards,
          [source.droppableId]: sourceBoard,
          [destination.droppableId]: destinationCopy,
        };
      });
    }
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
