import React from "react";
import { Title } from "../css/styled";
import DragabbleCard from "./DragabbleCard";
import { Droppable } from "@hello-pangea/dnd";
import { styled } from "styled-components";
import { useForm } from "react-hook-form";
import { ITodo, toDoState } from "../atoms";
import { useRecoilState, useSetRecoilState } from "recoil";

export const Wrapper = styled.div`
  width: 300px;
  padding: 20px 0px;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 5px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Area = styled.div<IAreaProps>`
  background-color: ${(props) =>
    props.$isDraggingOver
      ? "#4A5261"
      : props.$isDraggingFromThis
      ? "#9AA1B0"
      : "transparent"};
  flex-grow: 1;
  transition: background-color 0.3s ease-in-out;
  padding: 10px;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Input = styled.input`
  border: 0;
  border-radius: 8px;
  font-size: 16px;
  text-align: center;
  outline: none;
  padding: 8px;
`;

interface IBoradProps {
  toDos: ITodo[];
  boardId: string;
}

interface IAreaProps {
  $isDraggingOver: boolean;
  $isDraggingFromThis: boolean;
}

interface IForm {
  toDo: string;
}

const Board = ({ toDos, boardId }: IBoradProps) => {
  const setToDos = useSetRecoilState(toDoState);
  const { register, setValue, handleSubmit } = useForm<IForm>();
  const onValid = ({ toDo }: IForm) => {
    const newToDo = {
      id: Date.now(),
      text: toDo,
    };

    setToDos((allBoards) => {
      return {
        ...allBoards,
        [boardId]: [...allBoards[boardId], newToDo],
      };
    });

    setValue("toDo", "");
  };
  return (
    <Wrapper>
      <Title>{boardId}</Title>
      <Form onSubmit={handleSubmit(onValid)}>
        <Input
          {...register("toDo", { required: true })}
          type="text"
          placeholder={`Add task on ${boardId}`}
        />
      </Form>

      <Droppable droppableId={boardId}>
        {(provider, snapshot) => (
          <Area
            $isDraggingOver={snapshot.isDraggingOver}
            $isDraggingFromThis={Boolean(snapshot.draggingFromThisWith)}
            {...provider.droppableProps}
            ref={provider.innerRef}>
            {toDos.map((toDo, index) => (
              <DragabbleCard
                key={toDo.id}
                index={index}
                toDoId={toDo.id}
                toDoText={toDo.text}
                boardId={boardId}
              />
            ))}
            {provider.placeholder}
          </Area>
        )}
      </Droppable>
    </Wrapper>
  );
};

export default Board;
