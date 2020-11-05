import React, { useState, useEffect } from "react";
import EditarColaborador from "components/Colaborador/EditarColaborador";

import { useDispatch, useSelector } from "react-redux";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
} from "reactstrap";
// core components
import UserHeader from "components/Headers/UserHeader.js";
import PerfilData from "./PerfilData";
import { editProfile } from "redux/actions/Colaboradores";
import { Img } from "./Styles";

const Perfil = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState(PerfilData);

  const [newPhoto, setNewPhoto] = useState({
    photo: "",
    cover: "",
  });

  const [open, setOpen] = useState(false);

  useEffect(() => {
    dispatch(editProfile(PerfilData));
  }, [dispatch]);

  const profile = useSelector((state) => state.EmployeesReducer.profile);

  useEffect(() => {
    if (Object.keys(profile).length) {
      setInput(profile);
    }
  }, [setInput, profile]);

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };

  const handleSelectFile = (event) => {
    const name = event.target.name;
    const value = event.target.files[0];
    setInput({ ...input, [name]: value });
    setNewPhoto(
      value ? { ...newPhoto, [name]: value.name } : { ...newPhoto, [name]: "" }
    );
  };

  const submitForm = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <UserHeader
        userData={profile}
        input={input}
        newPhoto={newPhoto}
        handleSelectFile={handleSelectFile}
      />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
            <Card className="card-profile shadow">
              <Row className="justify-content-center">
                <Col className="order-lg-2" lg="3">
                  <div className="card-profile-image">
                    <Img
                      alt="..."
                      src={
                        newPhoto.photo
                          ? URL.createObjectURL(input.photo)
                          : input.photo
                      }
                    />
                  </div>
                </Col>
              </Row>
              <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                <div className="d-flex justify-content-between">
                  <Button
                    className="mr-4"
                    color="info"
                    onClick={() => setOpen(!open)}
                    size="sm"
                    title="Alterar Senha"
                  >
                    <i className="fas fa-key"></i>
                  </Button>
                  <Button
                    className="float-right"
                    color="default"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                    title="Mensagens"
                  >
                    <i className="fas fa-envelope-square"></i>
                  </Button>
                </div>
              </CardHeader>
              <CardBody className="pt-0 pt-md-4 mt-5">
                <div className="text-center">
                  <h3>
                    {profile.name}
                    <span className="font-weight-light">
                      , {profile.birthDate}
                    </span>
                  </h3>
                  <div className="h5 font-weight-300">
                    <i className="ni location_pin mr-2" />
                    {profile.city}, {profile.state}
                  </div>
                  <hr className="my-4" />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col className="order-xl-1" xl="8">
            <Form onSubmit={submitForm}>
              <EditarColaborador
                title="Editar Perfil"
                input={input}
                handleChangeInput={handleChangeInput}
                handleSelectFile={handleSelectFile}
                newPhoto={newPhoto}
              />
              <FormGroup className="text-center">
                <Button className="mt-3" color="primary" type="submit">
                  <i className="fas fa-save mr-3"></i>Salvar
                </Button>
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </Container>
      <Modal
        isOpen={open}
        toggle={() => {
          setOpen(!open);
        }}
        size="sm"
        centered
      >
        <ModalHeader
          toggle={() => {
            setOpen(!open);
          }}
        >
          Alterar Senha
        </ModalHeader>
        <Form>
          <ModalBody>
            <Row>
              <Col lg="12">
                <FormGroup>
                  <label className="form-control-label" htmlFor="password">
                    Senha
                  </label>
                  <Input
                    className="form-control-alternative"
                    type="password"
                    name="password"
                    onChange={handleChangeInput}
                  />
                </FormGroup>
              </Col>
              <Col lg="12">
                <FormGroup>
                  <label className="form-control-label" htmlFor="password">
                    Digite Novamente
                  </label>
                  <Input
                    className="form-control-alternative"
                    type="password"
                    name="password"
                    onChange={handleChangeInput}
                  />
                </FormGroup>
              </Col>
            </Row>
          </ModalBody>
          <ModalFooter>
            <Button type="submit" color="primary">Alterar</Button>
            <Button onClick={() => setOpen(!open)}>Cancelar</Button>
          </ModalFooter>
        </Form>
      </Modal>
    </>
  );
};

export default Perfil;
