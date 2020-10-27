import React, { useState } from "react";

// reactstrap components
import {
  Button,
  Container,
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
} from "reactstrap";

const UserHeader = ({ userData, newPhoto, input, handleSelectFile }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: "600px",
          backgroundImage: `url(${
            newPhoto.cover ? URL.createObjectURL(input.cover) : input.cover
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        {/* Mask */}
        <span className="mask bg-gradient-default opacity-8" />
        {/* Header container */}
        <Container className="d-flex align-items-center" fluid>
          <Row>
            <Col lg="7" md="10">
              <h1 className="display-2 text-white">Olá, {userData.name}.</h1>
              <p className="text-white mt-0 mb-5">
                Esta é a sua página de perfil. Você pode ver o progresso que
                você fez com seu trabalho e gerenciar seus projetos ou tarefas
                atribuídas.
              </p>
              <Button onClick={() => setOpen(!open)} color="info">
                Editar fundo
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
      <Modal isOpen={open} toggle={() => setOpen(!open)}>
        <ModalHeader toggle={() => setOpen(!open)}></ModalHeader>
        <ModalBody>
          {newPhoto.cover && (
            <div className="mb-3 col-xl-12 col-sm-12 col-lg-12">
              <img
                src={newPhoto.cover ? URL.createObjectURL(input.cover) : ""}
                alt=""
                style={{ height: "250px" }}
              />
            </div>
          )}
          <label className="btn bg-light ml-1 mb-0">
            {newPhoto.cover ? newPhoto.cover : "Escolha uma foto de fundo"}
            <Input
              className="d-none"
              type="file"
              name="cover"
              onChange={handleSelectFile}
              accept="image/*"
            />
          </label>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => setOpen(!open)}>
            Salvar
          </Button>
          <Button color="secondary" onClick={() => setOpen(!open)}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default UserHeader;
