import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import {
  Badge,
  Card,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Pagination,
  PaginationItem,
  PaginationLink,
  Table,
  Container,
  Row,
  Modal,
  Button,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Input,
  Form,
  Col,
} from "reactstrap";

import Header from "../../components/Headers/Header";

import { newProjects, setProject } from "../../redux/actions/Projetos";

import ProjetosData from "./ProjetosData";
import ProgressCard from "../../components/ProgressCard/ProgressCard";
import { Tr } from "./Styles";
import { InputStyled } from "./Styles";
import { CardHeaderStyled } from "./Styles";
import { useHistory } from "react-router-dom";

const Projetos = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(newProjects(ProjetosData));
  }, [dispatch]);

  const [open, setOpen] = useState(false);
  const [input, setInput] = useState({
    description: "",
  });

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setInput({...input, [name]: value});
  };

  const projects = useSelector((state) => state.ProjectsReducer.projects);

  const getBadge = (status) => {
    switch (status) {
      case "Em andamento":
        return "bg-blue";
      case "Atrasado":
        return "bg-yellow";
      case "Cancelado":
        return "bg-red";
      case "Concluído":
        return "bg-green";
      default:
        return "primary";
    }
  };

  const CardData = [
    {
      title: "Em andamento",
      progress: projects.filter(
        (contract) => contract.status === "Em andamento"
      ).length,
      max: projects.length,
      icon: "fas fa-clock",
      color: "blue",
    },
    {
      title: "Esperando Resposta",
      progress: projects.filter(
        (contract) => contract.status === "Esperando Resposta"
      ).length,
      max: projects.length,
      icon: "fas fa-pause-circle",
      color: "yellow",
    },
    {
      title: "Cancelados",
      progress: projects.filter((contract) => contract.status === "Cancelado")
        .length,
      max: projects.length,
      icon: "fas fa-times",
      color: "red",
    },
    {
      title: "Concluídos",
      progress: projects.filter((contract) => contract.status === "Concluído")
        .length,
      max: projects.length,
      icon: "fas fa-check",
      color: "green",
    },
  ];

  const handleSubmitForm = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Header children={<ProgressCard CardData={CardData} />} />
      <Container className="mt--7" fluid>
        <Row className="mt-5">
          <div className="col">
            <Card className="bg-default shadow">
              <CardHeaderStyled>
                <h3 className="text-white mb-0">Lista de Projetos</h3>
                <div className="d-flex align-items-center">
                  <InputStyled type="text" placeholder="Pesquisar..." />
                  <Button className="bg-transparent border-0">
                    <i className="fas fa-search text-white display-4"></i>
                  </Button>
                </div>
                <div>
                  <Button color="primary" onClick={() => setOpen(!open)}>
                    Adicionar
                  </Button>
                </div>
              </CardHeaderStyled>
              <Table
                className="align-items-center table-dark table-flush"
                responsive
              >
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Projeto</th>
                    <th scope="col">Descrição</th>
                    <th scope="col">Status</th>
                    <th scope="col">Data de Início</th>
                    <th scope="col">Data de Entrega</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  {projects.map((project, index) => (
                    <Tr
                      key={index}
                      onClick={() => {
                        dispatch(setProject(project));
                        history.push("/admin/projeto");
                      }}
                    >
                      <td>{project.name}</td>
                      <td>{project.description}</td>
                      <td>
                        <Badge color="" className="badge-dot">
                          <i className={getBadge(project.status)} />
                          {project.status}
                        </Badge>
                      </td>
                      <td>{project.start_date}</td>
                      <td>{project.delivery_date}</td>
                      <td className="text-right">
                        <UncontrolledDropdown>
                          <DropdownToggle
                            className="btn-icon-only text-light"
                            href="#pablo"
                            role="button"
                            size="sm"
                            color=""
                            onClick={(e) => {
                              e.stopPropagation();
                              e.preventDefault();
                            }}
                          >
                            <i className="fas fa-ellipsis-v" />
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-arrow" right>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Another action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Something else here
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                    </Tr>
                  ))}
                </tbody>
              </Table>
              <CardFooter className="py-4 bg-transparent border-0">
                <nav aria-label="...">
                  <Pagination
                    className="pagination justify-content-end mb-0"
                    listClassName="justify-content-end mb-0"
                  >
                    <PaginationItem className="disabled">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        tabIndex="-1"
                      >
                        <i className="fas fa-angle-left" />
                        <span className="sr-only">Previous</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem className="active">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        2 <span className="sr-only">(current)</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        3
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fas fa-angle-right" />
                        <span className="sr-only">Next</span>
                      </PaginationLink>
                    </PaginationItem>
                  </Pagination>
                </nav>
              </CardFooter>
            </Card>
          </div>
        </Row>
      </Container>
      <Modal
        isOpen={open}
        toggle={() => {
          setOpen(!open);
        }}
        size="lg"
      >
        <ModalHeader
          toggle={() => {
            setOpen(!open);
          }}
        >
          Criar novo projeto
        </ModalHeader>
        <Form onSubmit={handleSubmitForm}>
          <ModalBody>
            <Row>
              <Col lg="12">
                <FormGroup>
                  <Input
                    className="form-control-alternative"
                    type="text"
                    name="title"
                    onChange={handleChangeInput}
                    placeholder="Digite um título para o seu projeto"
                    required
                  />
                </FormGroup>
              </Col>
              <Col lg="12">
                <FormGroup>
                  <Input
                    className="form-control-alternative"
                    type="textarea"
                    rows="8"
                    name="description"
                    value={input.description}
                    onChange={handleChangeInput}
                    placeholder="Adicione uma descrição mais detalhada para seu projeto..."
                  />
                </FormGroup>
              </Col>
              <Col lg="3">
                <FormGroup>
                  <label className="form-control-label" htmlFor="start_date">
                    Data de Início
                  </label>
                  <Input
                    className="form-control-alternative"
                    type="date"
                    name="start_date"
                    onChange={handleChangeInput}
                    required
                  />
                </FormGroup>
              </Col>
              <Col lg="3">
                <FormGroup>
                  <label className="form-control-label" htmlFor="start_time">
                    Horário de Início
                  </label>
                  <Input
                    className="form-control-alternative"
                    type="time"
                    name="start_time"
                    onChange={handleChangeInput}
                    required
                  />
                </FormGroup>
              </Col>
              <Col lg="3">
                <FormGroup>
                  <label className="form-control-label" htmlFor="delivery_date">
                    Data de Entrega
                  </label>
                  <Input
                    className="form-control-alternative"
                    type="date"
                    onChange={handleChangeInput}
                    name="delivery_date"
                    required
                  />
                </FormGroup>
              </Col>
              <Col lg="3">
                <FormGroup>
                  <label className="form-control-label" htmlFor="end_time">
                    Horário de Entrega
                  </label>
                  <Input
                    className="form-control-alternative"
                    type="time"
                    name="end_time"
                    onChange={handleChangeInput}
                    required
                  />
                </FormGroup>
              </Col>
            </Row>
          </ModalBody>
          <ModalFooter className="d-flex justify-content-end">
            <Button color="primary" type="submit">
              Criar novo projeto
            </Button>
            <Button color="secondary" onClick={() => setOpen(!open)}>
              Sair
            </Button>
          </ModalFooter>
        </Form>
      </Modal>
    </>
  );
};

export default Projetos;
