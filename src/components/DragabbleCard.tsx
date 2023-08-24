import { Draggable } from "@hello-pangea/dnd";
import { Card } from "../css/styled";
import React from "react";

interface IDragabbleCardProps {
  toDo: string;
  index: number;
}

const DraggabbleCard = ({ toDo, index }: IDragabbleCardProps) => {
  return (
    <Draggable draggableId={toDo} index={index} key={toDo}>
      {(magic) => (
        <Card
          ref={magic.innerRef}
          {...magic.draggableProps}
          {...magic.dragHandleProps}>
          {toDo}
        </Card>
      )}
    </Draggable>
  );
};

export default React.memo(DraggabbleCard);
