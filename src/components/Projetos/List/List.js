import React, { useContext, useRef } from "react";
import { useDrop, useDrag } from "react-dnd";

import BoardContext from "../Board/context";

import { useDispatch } from "react-redux";

import Card from "../Card/Card";
import { useState } from "react";
import { Button, Input, Form } from "reactstrap";

import { Container } from "./styles";
import { setCard, deleteList } from "../../../redux/actions/Projetos";

function List({ data, index: listIndex }) {
  const dispatch = useDispatch();
  const ref = useRef();

  const { moveCard, moveList } = useContext(BoardContext);
  const [inputCard, setInputCard] = useState(false);
  const [input, setInput] = useState();

  const openInputCard = () => {
    setInputCard(!inputCard);
  };

  const handleChangeInput = (event) => {
    setInput(event.target.value);
  };

  const [{ isDragging }, dragRef] = useDrag({
    item: { type: "LIST", listIndex },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, dropRefList] = useDrop({
    accept: "LIST",
    hover(item, monitor) {
      const draggedListIndex = item.listIndex;
      const targetListIndex = listIndex;

      if (draggedListIndex === targetListIndex) {
        return;
      }

      const targetSize = ref.current.getBoundingClientRect();
      const targetCenter = (targetSize.left - targetSize.right) / 2;

      const draggedOffset = monitor.getClientOffset();

      const draggedLeft = targetSize.left - draggedOffset.x;

      if (draggedListIndex < targetListIndex && draggedLeft < targetCenter) {
        return;
      }

      if (draggedListIndex > targetListIndex && draggedLeft > targetCenter) {
        return;
      }

      moveList(draggedListIndex, targetListIndex);

      item.listIndex = targetListIndex;
    },
  });

  const [, dropRef] = useDrop({
    accept: "CARD",
    hover(item, monitor) {
      const draggedListIndex = item.listIndex;
      const targetListIndex = listIndex;

      const draggedIndex = item.index;
      const targetIndex = 0;

      if (draggedListIndex === targetListIndex) {
        return;
      }

      moveCard(draggedListIndex, targetListIndex, draggedIndex, targetIndex);

      item.index = targetIndex;
      item.listIndex = targetListIndex;
    },
  });

  const handleSubmitForm = (event) => {
    event.preventDefault();
    dispatch(setCard({ index: listIndex, input }));
    openInputCard();
  };

  const handleDeleteList = (listIndex) => {
    dispatch(deleteList(listIndex));
  };

  dragRef(dropRef(ref));
  dragRef(dropRefList(ref));

  return (
    <Container className="container" ref={ref} isDragging={isDragging} done={data.done}>
      <header>
        <h2 className="text-white">{data.title}</h2>
        <button
          className="deleteList"
          onClick={() => handleDeleteList(listIndex)}
        >
          <i title="Deletar Lista" className="fas fa-trash text-white"></i>
        </button>
      </header>

      <ul>
        {data.cards.map((card, index) => (
          <Card
            listData={data}
            key={card.id}
            listIndex={listIndex}
            index={index}
            data={card}
          />
        ))}
        {inputCard && (
          <Form
            onSubmit={handleSubmitForm}
            className="d-flex flex-wrap justify-content-center"
          >
            <Input
              type="textarea"
              rows="2"
              className="mb-3"
              name="input"
              valeu={input}
              onChange={handleChangeInput}
              placeholder="Insira um título para este cartão"
            />
            <>
              <Button className="mr-2" color="primary" type="submit">
                <i className="fas fa-plus-square"></i> Adicionar um Cartão
              </Button>
              <Button color="secondary" onClick={openInputCard}>
                X
              </Button>
            </>
          </Form>
        )}
        {!inputCard && (
          <button className="w-100 border-0" onClick={openInputCard}>
            <i className="fas fa-plus-square"></i> Adicionar um Cartão
          </button>
        )}
      </ul>
    </Container>
  );
}

export default List;
