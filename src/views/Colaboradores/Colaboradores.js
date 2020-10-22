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
  FormGroup,
} from "reactstrap";

import Header from "components/Headers/Header.js";

import ColaboradoresData from "./ColaboradoresData";
import { CardHeaderStyled, InputStyled, Tr } from "./styles";
import ProgressCard from "../../components/ProgressCard/ProgressCard";
import { newEmployees } from "redux/actions/Colaboradores";

const Colaboradores = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(newEmployees(ColaboradoresData));
  }, [dispatch]);

  const [open, setOpen] = useState(false);
  const [employees, setemployees] = useState({});
  const [input, setInput] = useState();

  const handleChangeInput = (event) => {
    setInput(event.target.value);
  };

  const submitForm = (event) => {
    event.preventDefault();
    dispatch(newComment(input));
  };

  const employees = useSelector((state) => state.employeesReducer.employees);

  const getBadge = (status) => {
    switch (status) {
      case "Assinado":
        return "bg-success";
      case "Inactive":
        return "bg-secondary";
      case "Pendente":
        return "bg-blue";
      case "Encerrado":
        return "bg-cancelados";
      default:
        return "primary";
    }
  };

  const CardData = [
    {
      title: "Pendentes",
      progress: employeess.filter((employees) => employees.status === "Pendente")
        .length,
      max: employeess.length,
      icon: "fas fa-stopwatch",
      color: "blue",
    },
    {
      title: "Cancelados",
      progress: employeess.filter((employees) => employees.status === "Cancelados")
        .length,
      max: employeess.length,
      icon: "fas fa-times",
      color: "red",
    },
    {
      title: "Assinados",
      progress: employeess.filter((employees) => employees.status === "Assinado")
        .length,
      max: employeess.length,
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
                <h3 className="text-white mb-0">Lista de Colaboradores</h3>
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
                    <th scope="col">Contrato</th>
                    <th scope="col">Valor</th>
                    <th scope="col">Status</th>
                    <th scope="col">Criado em</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  {employeess.map((employees, index) => (
                    <Tr
                      key={index}
                      onClick={() => {
                        setOpen(!open);
                        setemployees(employees);
                      }}
                    >
                      <td>{employees.name}</td>
                      <td>{employees.value}</td>
                      <td>
                        <Badge color="" className="badge-dot">
                          <i className={getBadge(employees.status)} />
                          {employees.status}
                        </Badge>
                      </td>
                      <td>{employees.createdIn}</td>
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
         
        </ModalHeader>
        <ModalBody>
          
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

export default Colaboradores;