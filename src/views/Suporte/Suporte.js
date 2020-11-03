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
  Input,
  Form,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

import Header from "components/Headers/Header.js";

import { newSupports, newAnswers } from "../../redux/actions/Suporte";

import SuporteData from "./SuporteData";
import { Tr } from "./styles";
import ProgressCard from "components/ProgressCard/ProgressCard";
import { InputStyled } from "views/Contratos/styles";
import { CardHeaderStyled } from "views/Contratos/styles";

const Suporte = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(newSupports(SuporteData));
  }, [dispatch]);

  const [open, setOpen] = useState(false);
  const [support, setSupport] = useState({});
  const [input, setInput] = useState({
    ticket: "",
    secretary: "",
    file: "",
    files: [],
  });

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };

  const submitForm = (event) => {
    event.preventDefault();
    dispatch(newAnswers(input));
  };

  const supports = useSelector((state) => state.SupportsReducer.supports);

  const getBadge = (status) => {
    switch (status) {
      case "Concluído":
        return "bg-green";
      case "Aberto":
        return "bg-yellow";
      case "Fechado":
        return "bg-red";
      default:
        return "primary";
    }
  };

  const CardData = [
    {
      title: "Abertos",
      progress: 30,
      max: 40,
      icon: "fas fa-headset",
      color: "yellow",
    },
    {
      title: "Respondidos",
      progress: 0,
      max: 50,
      icon: "fas fa-question",
      color: "blue",
    },
    {
      title: "Encerrados",
      progress: 35,
      max: 50,
      icon: "fas fa-times",
      color: "red",
    },
    {
      title: "Concluídos",
      progress: 35,
      max: 40,
      icon: "fas fa-check",
      color: "green",
    },
  ];

  return (
    <>
      <Header children={<ProgressCard CardData={CardData} />} />
      <Container className="mt--7" fluid>
        <Row className="mt-5">
          <div className="col">
            <Card className="bg-default shadow">
              <CardHeaderStyled>
                <h3 className="text-white mb-0">Lista de Chamados</h3>
                <div className="d-flex align-items-center">
                  <InputStyled type="text" placeholder="Pesquisar..." />
                  <Button className="bg-transparent border-0">
                    <i className="fas fa-search text-white display-4"></i>
                  </Button>
                </div>
              </CardHeaderStyled>
              <Table
                className="align-items-center table-dark table-flush"
                responsive
              >
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Chamado</th>
                    <th scope="col">Status</th>
                    <th scope="col">Criado em</th>
                    <th scope="col">última Resposta</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  {supports.map((support, index) => (
                    <Tr
                      key={index}
                      onClick={() => {
                        setOpen(!open);
                        setSupport(support);
                      }}
                    >
                      <td>{support.id}</td>
                      <td>
                        <Badge color="" className="badge-dot">
                          <i className={getBadge(support.status)} />
                          {support.status}
                        </Badge>
                      </td>
                      <td>{support.createdIn}</td>
                      <td>{support.lastAnswer}</td>
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
          {support.name}
        </ModalHeader>
        <ModalBody>
          <>
            <p className="mb-0">{support.description}</p>
            <p className="h6 mb-3">Criado em: {support.createdIn}</p>
          </>
          <>
            {support.answers &&
              support.answers.map((answer, index) => (
                <div key={index} className="p-3 rounded bg-default text-white">
                  <p>
                    <b>{answer.createdBy}</b>
                  </p>
                  <p>{answer.answer}</p>
                  <p className="h6 mb-3">Criado em: {answer.createdIn}</p>
                </div>
              ))}
            <Form onSubmit={submitForm}>
              <Input
                className="mb-3 mt-5"
                name="answer"
                placeholder="Digite uma nova resposta..."
                onChange={handleChangeInput}
                rows="4"
                type="textarea"
              />
              <div className="d-flex justify-content-end">
                <Button color="primary">Comentar</Button>
              </div>
            </Form>
          </>
        </ModalBody>
        <ModalFooter className="d-flex justify-content-end">
          <Button color="secondary" onClick={() => setOpen(!open)}>
            Sair
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default Suporte;