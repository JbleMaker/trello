import { Draggable } from "@hello-pangea/dnd";
import { Card } from "../css/styled";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
import { useSetRecoilState } from "recoil";
import { toDoState } from "../atoms";

interface IDragabbleCardProps {
  toDoId: number;
  toDoText: string;
  index: number;
  boardId: string;
}

const DraggabbleCard = ({
  toDoId,
  toDoText,
  index,
  boardId,
}: IDragabbleCardProps) => {
  const setToDos = useSetRecoilState(toDoState);
  const deleteTodo = () => {
    setToDos((allBoards) => {
      const id = allBoards[boardId][index].id;
      const newToDos = allBoards[boardId].filter((todo) => todo.id !== id);
      return { ...allBoards, [boardId]: newToDos };
    });
  };
  return (
    <Draggable draggableId={toDoId + ""} index={index}>
      {(magic, snapshot) => (
        <Card
          $isDragging={snapshot.isDragging}
          ref={magic.innerRef}
          {...magic.draggableProps}
          {...magic.dragHandleProps}>
          {toDoText}
          <FontAwesomeIcon onClick={deleteTodo} icon={faDeleteLeft} />
        </Card>
      )}
    </Draggable>
  );
};

export default React.memo(DraggabbleCard);
