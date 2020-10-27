import React, { useState, useEffect } from "react";
import { setAutoFreeze, produce } from "immer";
import { useDispatch } from "react-redux";

import BoardContext from "./context";

import List from "../List/List";

import {
  Modal,
  ModalBody,
  ModalHeader,
  Button,
  Input,
  DropdownToggle,
  DropdownMenu,
  Dropdown,
} from "reactstrap";

import {
  Container,
  Label,
  ActivitiesList,
  ButtonBox,
  DeleteLabel,
} from "./styles";

import {
  setParticipant,
  deleteParticipant,
  updateList,
} from "../../../redux/actions/Projetos";

function Board({ projectContent }) {
  const dispatch = useDispatch();
  const [lists, setLists] = useState([
    {
      title: "Demanda",
      cards: [],
    },
    {
      title: "Em Andamento",
      cards: [],
    },
    {
      title: "Aguardando Resposta",
      cards: [],
    },
    {
      title: "Concluído",
      cards: [],
      done: true,
    },
  ]);
  const [openModal, setOpenModal] = useState(false);
  const [cardContent, setCardContent] = useState({ card: [], list: [] });
  const [editComment, setEditComment] = useState({
    open: false,
    index: 0,
  });
  const [checklist, setChecklist] = useState();
  const [inputChecklist, setInputChecklist] = useState("");
  const [input, setInput] = useState({
    delivered: false,
    delivery_date: "",
    delivery_time: "",
    description: "",
    attachments: undefined,
    checklist: checklist,
    comment: "",
    editComment: "",
    label: "",
    listIndex: "",
    cardIndex: "",
  });
  const [files, setFiles] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const createChecklist = () => {
    setChecklist([]);
  };

  const addItemToChecklist = (item) => {
    setChecklist([...checklist, { name: item, checked: false }]);
    setInputChecklist("");
  };

  const deleteItemChecklist = (index) => {
    if (checklist.length === 1) {
      setChecklist();
      return;
    }
    setChecklist(checklist.filter((item, i) => i !== index));
  };

  const [, updateState] = useState();

  useEffect(() => {
    if (projectContent) {
      setLists(projectContent);
    }
  }, [projectContent]);

  const addLabel = () => {
    dispatch(
      setParticipant({
        label: input.label,
        cardIndex: input.cardIndex,
        listIndex: input.listIndex,
      })
    );

    setInput({ ...input, label: "" });
  };

  const deleteLabel = (labelIndex) => {
    dispatch(
      deleteParticipant({
        labelIndex,
        cardIndex: input.cardIndex,
        listIndex: input.listIndex,
      })
    );

    updateState({});
  };

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };

  const handleChangeInputFile = (event) => {
    setInput({ ...input, attachments: event.target.files });
  };

  const handleChangeChecklist = (checked, name) => {
    setChecklist(
      checklist.map((item) => {
        if (item.name === name) {
          item.checked = checked;
        }
        return item;
      })
    );
  };

  function moveList(fromList, toList) {
    setAutoFreeze(false);

    const list = produce(lists, (draft) => {
      const dragged = draft[fromList];
      draft.splice(fromList, 1);
      draft.splice(toList, 0, dragged);
    });

    setLists(list);
    dispatch(updateList(list));
  }

  function moveCard(fromList, toList, from, to) {
    setAutoFreeze(false);
    const list = produce(lists, (draft) => {
      const dragged = draft[fromList].cards[from];
      draft[fromList].cards.splice(from, 1);
      draft[toList].cards.splice(to, 0, dragged);
    });

    setLists(list);

    dispatch(updateList(list));
  }

  function handleOpenModal(cardData, listData, cardIndex, listIndex) {
    setCardContent({ card: cardData, list: listData });
    setOpenModal(!openModal);
    let date = cardData.delivery_date.replace(/\//g, "-").split("-");
    setInput({
      ...input,
      delivered: cardData.delivered,
      delivery_date:
        date[date.length - 1] +
        "-" +
        date[date.length - 2] +
        "-" +
        date[date.length - 3],
      delivery_time: cardData.delivery_time,
      description: cardData.description,
      cardIndex,
      listIndex,
    });
  }

  return (
    <BoardContext.Provider
      value={{ lists, moveCard, handleOpenModal, moveList }}
    >
      
        <Container>
          {lists.map((list, index) => (
            <List data={list} index={index} key={index} />
          ))}
        </Container>
      
      <Modal
        isOpen={openModal}
        toggle={() => setOpenModal(!openModal)}
        size="lg"
      >
        <ModalHeader toggle={() => setOpenModal(!openModal)}>
          <div className="d-flex align-items-center w-100">
            {cardContent.card.title}
          </div>
        </ModalHeader>
        <ModalBody>
          <p>
            na lista <b>{cardContent.list.title}</b>
          </p>
          <div className="d-flex flex-wrap mb-3">
            <div className="mr-3 w-25">
              <p className="mb-1">
                <b>Participantes</b>
              </p>
              <div className="d-flex flex-wrap align-items-center">
                {cardContent.card.labels &&
                  cardContent.card.labels.map((label, index) => (
                    <Label key={index}>
                      {label}{" "}
                      <DeleteLabel
                        className="delete"
                        onClick={() => deleteLabel(index)}
                      >
                        x
                      </DeleteLabel>
                    </Label>
                  ))}
                <Dropdown
                  isOpen={dropdownOpen}
                  toggle={() => setDropdownOpen((prevState) => !prevState)}
                >
                  <DropdownToggle color="primary">
                    <i className="fas fa-user-plus"></i>
                  </DropdownToggle>
                  <DropdownMenu>
                    <Input
                      placeholder="Nome"
                      name="label"
                      value={input.label}
                      onChange={handleChangeInput}
                    />
                    <ButtonBox>
                      <button onClick={addLabel}>Salvar</button>
                    </ButtonBox>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </div>
            <div className="b-1 w-50">
              <p className="mb-1 ml-3">
                <b>DATA E HORA DE ENTREGA</b>
              </p>
              <div className="d-flex align-items-center">
                <input
                  type="checkbox"
                  checked={input.delivered}
                  name="delivered"
                  onChange={() =>
                    setInput({ ...input, delivered: !input.delivered })
                  }
                />

                <div className="d-flex flex-wrap">
                  <Input
                    className="ml-2 mb-3"
                    type="date"
                    name="delivery_date"
                    onChange={handleChangeInput}
                    value={input.delivery_date}
                    style={{ width: "160px" }}
                  />
                  <Input
                    className="ml-2"
                    type="time"
                    name="delivery_time"
                    onChange={handleChangeInput}
                    value={input.delivery_time}
                    style={{ width: "100px" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <>
            <h5>Descrição</h5>
            <Input
              type="textarea"
              onBlur={(event) => (event.currentTarget.rows = "2")}
              onFocus={(event) => (event.currentTarget.rows = "8")}
              name="description"
              value={input.description}
              onChange={handleChangeInput}
              placeholder="Adicione uma descrição mais detalhada para seu projeto..."
            />
            <div className="mt-3">
              <Button color="primary">Salvar</Button>
              <Button color="secondary">Cancelar</Button>
            </div>
            {checklist && (
              <>
                <h5 className="mt-3">Checklist</h5>
                {checklist.map((list, index) => {
                  return (
                    <div key={index} className="d-flex align-items-center mb-2">
                      <input
                        className="mr-2"
                        type="checkbox"
                        name={list.name}
                        checked={list.checked}
                        onChange={() =>
                          handleChangeChecklist(!list.checked, list.name)
                        }
                      />
                      <div className="d-flex align-items-center">
                        {list.name}{" "}
                        <Button
                          size="sm"
                          className="ml-3"
                          onClick={() => deleteItemChecklist(index)}
                        >
                          X
                        </Button>
                      </div>
                    </div>
                  );
                })}
                <input
                  type="text"
                  value={inputChecklist}
                  onChange={(event) => setInputChecklist(event.target.value)}
                  className="w-50"
                />
                <Button
                  className="ml-2"
                  color="primary"
                  onClick={() => addItemToChecklist(inputChecklist)}
                >
                  Adicionar item
                </Button>
              </>
            )}
            <div>
              {!checklist && (
                <Button
                  className="mt-3"
                  color="primary"
                  onClick={createChecklist}
                >
                  Criar checklist
                </Button>
              )}
            </div>

            <h5 className="mt-3">Anexos</h5>
            {input.attachments &&
              input.attachments.forEach((file) => {
                setFiles([...files, file.name]);
              })}

            <ol>
              {files.map((file, index) => (
                <li key={index}>{file}</li>
              ))}
            </ol>

            <label className="btn bg-light ml-1">
              Selecione um novo arquivo
              <Input
                style={{ display: "none" }}
                type="file"
                onChange={handleChangeInputFile}
                multiple
              />
            </label>

            <h5 className="mt-3">Atividades</h5>
            <Input
              type="textarea"
              rows="2"
              name="comment"
              value={input.comment}
              onChange={handleChangeInput}
              placeholder="Escreva um novo comentário"
            />
            <div className="mt-3">
              <Button color="primary">Salvar</Button>
              <Button color="secondary">Cancelar</Button>
            </div>
            <>
              {cardContent.card.length > 0 &&
                cardContent.card.activities.map((activity, index) => (
                  <ActivitiesList key={index}>
                    <p className="userName">{activity.userName}</p>
                    <p className="statusMessage">{activity.statusMessage}</p>
                    <p className="dateTime">{activity.dateTime}</p>
                    {activity.comment.length > 0 && (
                      <>
                        <span>
                          {editComment.open && editComment.index === index ? (
                            <>
                              <Input
                                className="mb-3"
                                type="textarea"
                                rows="4"
                                name="editComment"
                                value={
                                  input.editComment === ""
                                    ? activity.comment
                                    : input.editComment
                                }
                                onChange={handleChangeInput}
                              />
                              <ButtonBox>
                                <button
                                  onClick={() =>
                                    setEditComment({
                                      ...editComment,
                                      open: !editComment.open,
                                      index: index,
                                    })
                                  }
                                >
                                  Salvar
                                </button>
                                <button
                                  onClick={() =>
                                    setEditComment({
                                      ...editComment,
                                      open: !editComment.open,
                                    })
                                  }
                                >
                                  <i className="fas fa-ban"></i>
                                </button>
                              </ButtonBox>
                            </>
                          ) : (
                            <p>{activity.comment}</p>
                          )}
                        </span>{" "}
                        {!editComment.open && (
                          <ButtonBox>
                            <button
                              onClick={() =>
                                setEditComment({
                                  ...editComment,
                                  open: !editComment.open,
                                  index: index,
                                })
                              }
                            >
                              Editar
                            </button>
                            <button>Excluir</button>
                          </ButtonBox>
                        )}
                      </>
                    )}
                  </ActivitiesList>
                ))}
            </>
          </>
        </ModalBody>
      </Modal>
    </BoardContext.Provider>
  );
}

export default Board;
