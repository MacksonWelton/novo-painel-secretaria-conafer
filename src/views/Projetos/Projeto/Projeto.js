import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from "reactstrap";

import Board from "components/Projetos/Board/Board";
import Header from "components/Headers/Header";
import ScrollContainer from "react-indiana-drag-scroll";
import { setList } from "../../../redux/actions/Projetos";

const Projeto = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const project = useSelector((state) => state.ProjectsReducer.project);

  const [showModal, setShowModal] = useState(false);
  const [input, setInput] = useState({
    title: "",
    done: false,
  });

  if (Object.keys(project).length === 0) {
    history.goBack();
    return <></>;
  }

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };

  const addList = (event) => {
    event.preventDefault();
    dispatch(setList({ title: input.title, done: input.done, cards: [] }));
    setShowModal(!showModal);
  };

  return (
    <>
      <Header>
        <Card className="ml-3">
          <CardBody>
            <Row>
              <Col lg="12" className="mb-3">
                Projeto: <b>{project.name}</b>
              </Col>
              <Col lg="12">
                <Button color="primary" onClick={() => setShowModal(!showModal)}>Adicionar Lista</Button>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Header>
      <Container className="mt--7" fluid>
        <Card className="bg-default shadow">
          <ScrollContainer
            horizontal
            ignoreElements=".container"
            hideScrollbars
          >
            <Board projectContent={project.project_items} />
          </ScrollContainer>
        </Card>
      </Container>
      <Modal isOpen={showModal} toggle={() => setShowModal(!showModal)}>
        <ModalHeader toggle={() => setShowModal(!showModal)}>Criar nova lista</ModalHeader>
        <Form onSubmit={addList}>
          <ModalBody>
            <Row>
              <Col lg="12">
                <FormGroup>
                  <label className="form-control-label" htmlFor="title">Título da Lista</label>
                  <Input
                    className="form-control-alternative"
                    name="title"
                    placeholder="Ex: Entregas"
                    onChange={handleChangeInput}
                  />
                </FormGroup>
              </Col>
              <Col lg="12">
                <FormGroup className="ml-4">
                  <Input
                    type="checkbox"
                    className="form-control-alternative"
                    checked={input.done}
                    name="done"
                    onChange={handleChangeInput}
                  />
                  <label className="form-control-label" htmlFor="done">Marcar como lista de conclusão</label>
                </FormGroup>
              </Col>
            </Row>
          </ModalBody>
          <ModalFooter>
            <Button type="submit" color="primary">Salvar</Button>
            <Button color="secondary" onClick={() => setShowModal(!showModal)}>Cancelar</Button>
          </ModalFooter>
        </Form>
      </Modal>
    </>
  );
};

export default Projeto;
