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

import Header from "../../../components/Headers/Header";

import { newBudgets, newComment } from "../../../redux/actions/Orcamentos";

import OrcamentosData from "./OrcamentosData";
import ProgressCard from "../../../components/ProgressCard/ProgressCard";
import { Tr } from "./Styles";
import { InputStyled } from "./Styles";
import { CardHeaderStyled } from "./Styles";

const Orcamentos = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(newBudgets(OrcamentosData));
  }, [dispatch]);

  const [open, setOpen] = useState(false);
  const [budget, setBudget] = useState({});
  const [input, setInput] = useState();

  const handleChangeInput = (event) => {
    setInput(event.target.value);
  };

  const submitForm = (event) => {
    event.preventDefault();
    dispatch(newComment(input));
  };

  const budgets = useSelector((state) => state.BudgetsReducer.budgets);

  const getBadge = (status) => {
    switch (status) {
      case "Enviado":
        return "bg-blue";
      case "Expirado":
        return "bg-yellow";
      case "Declinado":
        return "bg-red";
      case "Aceito":
        return "bg-green";
      default:
        return "primary";
    }
  };

  const CardData = [
    {
      title: "Enviados",
      progress: budgets.filter((contract) => contract.status === "Enviado")
        .length,
      max: budgets.length,
      icon: "fas fa-stopwatch",
      color: "blue",
    },
    {
      title: "Expirados",
      progress: budgets.filter((contract) => contract.status === "Expirado")
        .length,
      max: budgets.length,
      icon: "fas fa-exclamation-triangle",
      color: "yellow",
    },
    {
      title: "Declinados",
      progress: budgets.filter((contract) => contract.status === "Declinado")
        .length,
      max: budgets.length,
      icon: "fas fa-times",
      color: "red",
    },
    {
      title: "Aceitos",
      progress: budgets.filter((contract) => contract.status === "Aceito")
        .length,
      max: budgets.length,
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
                <h3 className="text-white mb-0">Lista de Orçamentos</h3>
                <div className="d-flex align-items-center">
                  <InputStyled type="text" placeholder="Pesquisar..." />
                  <Button className="bg-transparent border-0">
                    <i className="fas fa-search text-white display-4"></i>
                  </Button>
                </div>
                <div>
                  <Button color="primary">Adicionar</Button>
                </div>
              </CardHeaderStyled>
              <Table
                className="align-items-center table-dark table-flush"
                responsive
              >
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Orçamento</th>
                    <th scope="col">Valor</th>
                    <th scope="col">Status</th>
                    <th scope="col">Data</th>
                    <th scope="col">Data de Expiração</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  {budgets.map((budget, index) => (
                    <Tr
                      key={index}
                      onClick={() => {
                        setOpen(!open);
                        setBudget(budget);
                      }}
                    >
                      <td>{budget.name}</td>
                      <td>{budget.value}</td>
                      <td>
                        <Badge color="" className="badge-dot">
                          <i className={getBadge(budget.status)} />
                          {budget.status}
                        </Badge>
                      </td>
                      <td>{budget.createdIn}</td>
                      <td>{budget.expirationDate}</td>
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
          {budget.name}
        </ModalHeader>
        <ModalBody>
          <>
            <p className="mb-0">{budget.description}</p>
            <p className="h6 mb-3">Criado em: {budget.createdIn}</p>
          </>
          <>
            {budget.comments &&
              budget.comments.map((comment, index) => (
                <div
                  key={index}
                  className={
                    comment.mainComment !== null
                      ? "p-3 rounded bg-default text-white"
                      : "p-3 mb-3 rounded bg-light"
                  }
                >
                  <p>
                    <b>{comment.createdBy}</b>
                  </p>
                  <p>{comment.comment}</p>
                  <p
                    className={
                      comment.mainComment !== null ? "h6 text-white" : "h6"
                    }
                  >
                    Criado em: {comment.createdIn}
                  </p>
                </div>
              ))}
            <Form onSubmit={submitForm}>
              <Input
                className="mb-3 mt-5"
                placeholder="Digite uma nova resposta..."
                onChange={handleChangeInput}
                rows="4"
                type="textarea"
              />
              <div className="d-flex justify-content-end">
                <Button type="submit" color="primary">
                  Comentar
                </Button>
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

export default Orcamentos;