import React, { useRef, useContext, useState } from "react";
import { useDrag, useDrop } from "react-dnd";

import BoardContext from "../Board/context";

import { Container, Label } from "./styles";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

function Card({ data, index, listIndex, listData }) {
  const ref = useRef();
  const { moveCard, handleOpenModal } = useContext(BoardContext);

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [{ isDragging }, dragRef] = useDrag({
    item: { type: "CARD", index, listIndex },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, dropRef] = useDrop({
    accept: "CARD",
    hover(item, monitor) {
      const draggedListIndex = item.listIndex;
      const targetListIndex = listIndex;

      const draggedIndex = item.index;
      const targetIndex = index;

      if (
        draggedIndex === targetIndex &&
        draggedListIndex === targetListIndex
      ) {
        return;
      }

      const targetSize = ref.current.getBoundingClientRect();
      const targetCenter = (targetSize.bottom - targetSize.top) / 2;

      const draggedOffset = monitor.getClientOffset();

      const draggedTop = draggedOffset.y - targetSize.top;

      if (draggedIndex < targetIndex && draggedTop < targetCenter) {
        return;
      }

      if (draggedIndex > targetIndex && draggedTop > targetCenter) {
        return;
      }

      moveCard(draggedListIndex, targetListIndex, draggedIndex, targetIndex);

      item.index = targetIndex;
      item.listIndex = targetListIndex;
    },
  });

  dragRef(dropRef(ref));

  return (
    <Container
      ref={ref}
      isDragging={isDragging}
      onClick={() => handleOpenModal(data, listData, index, listIndex)}
    >
      <header>
        {data.labels.map((label, index) => {
          if (index <= 2) {
            return <Label key={index}>{label}</Label>
          };
          return undefined;
        })}
        {data.labels.length > 2 && (
          <Dropdown size="sm" key={index} isOpen={dropdownOpen}
          toggle={() => setDropdownOpen((prevState) => !prevState)}>
            <DropdownToggle
              color="primary"
              onClick={(event) => event.stopPropagation()}
            ><i className="fas fa-sort-down"></i></DropdownToggle>
            <DropdownMenu>
              {data.labels.map((label, index) => {
                if (index > 2) {
                  return (
                    <DropdownItem key={index}>
                      <Label>{label}</Label>
                    </DropdownItem>
                  );
                }
                  return undefined;
              })}
            </DropdownMenu>
          </Dropdown>
        )}
      </header>
        <p className="text-default">{data.title}</p>
    </Container>
  );
}

export default Card;
