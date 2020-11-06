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
  Nav,
  NavItem,
  NavLink,
  Form,
  Input,
} from "reactstrap";

import Header from "../../../components/Headers/Header";

import ColaboradoresData from "./ColaboradoresData";
import { CardHeaderStyled, InputStyled, Tr } from "./styles";
import ProgressCard from "../../../components/ProgressCard/ProgressCard";
import {
  newEmployees,
  downloadEmployees,
  deleteEmployees,
} from "redux/actions/Colaboradores";
import Colaborador from "components/Colaborador/Colaborador";
import EditarColaborador from "components/Colaborador/EditarColaborador";

import user from "../../../assets/img/theme/user.png";
import BotoesDeAcao from "../../../components/BotoesDeAcao/BotoesDeAcao";

const Colaboradores = () => {
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.EmployeesReducer.employees);

  useEffect(() => {
    dispatch(newEmployees(ColaboradoresData));
  }, [dispatch]);

  const [open, setOpen] = useState(false);
  const [employee, setEmployee] = useState({});
  const [tab, setTab] = useState("Dados");
  const [input, setInput] = useState({
    photo: user,
    name: "",
    dateBirth: "",
    sex: "",
    education: "",
    position: "",
    salary: "",
    cpf: "",
    rg: "",
    district: "",
    admission_date: "",
    emission_date: "",
    organ_issuing: "",
    voter_title: "",
    electoral_zone: "",
    section: "",
    email: "",
    citizenship: "",
    address: "",
    cep: "",
    city: "",
    state: undefined,
    marital_status: undefined,
  });
  const [checkbox, setCheckbox] = useState([]);
  const [newPhoto, setNewPhoto] = useState(true);
  const [openAddContract, setOpenAddContract] = useState(false);

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };

  const handleChangeCheckbox = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setCheckbox([...checkbox, { cpf: value, checked }]);
    } else {
      setCheckbox(checkbox.filter((check) => check.cpf !== value));
    }
  };

  const handleSelectAllCheckbox = (event) => {
    const checked = event.target.checked;

    if (checked) {
      setCheckbox(
        employees.map((employee) => {
          return { cpf: employee.cpf, checked: true };
        })
      );
    } else {
      setCheckbox([]);
    }
  };

  const handleSelectFile = (event) => {
    const name = event.target.name;
    const value = event.target.files[0];

    if (value === undefined) {
      setInput({ ...input, [name]: user });
    } else {
      setInput({ ...input, [name]: value });
    }

    setNewPhoto(
      value ? { ...newPhoto, [name]: value.name } : { ...newPhoto, [name]: "" }
    );
  };

  const submitForm = (event) => {
    event.preventDefault();
  };

  const handleDownloadsEmployees = () => {
    dispatch(downloadEmployees(checkbox));
  };

  const handleDeleteEmployees = () => {
    dispatch(deleteEmployees(checkbox));
  };

  const getBadge = (status) => {
    switch (status) {
      case "Ativo/a":
        return "bg-blue";
      case "Inativo/a":
        return "bg-secondary";
      case "Banido/a":
        return "bg-red";
      default:
        return "primary";
    }
  };

  const CardData = [
    {
      title: "Ativos",
      progress: employees.filter((employees) => employees.status === "Ativo/a")
        .length,
      max: employees.length,
      icon: "fas fa-user-check",
      color: "blue",
    },
    {
      title: "Inativos",
      progress: employees.filter(
        (employees) => employees.status === "Inativo/a"
      ).length,
      max: employees.length,
      icon: "fas fa-user-times",
      color: "gray",
    },
    {
      title: "Banidos",
      progress: employees.filter((employees) => employees.status === "Banido/a")
        .length,
      max: employees.length,
      icon: "fas fa-user-alt-slash",
      color: "red",
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
                  <Button
                    color="primary"
                    onClick={() => setOpenAddContract(!open)}
                  >
                    Adicionar
                  </Button>
                </div>
              </CardHeaderStyled>
              <Table
                className="align-items-center table-dark table-flush"
                responsive
              >
                <thead className="thead-dark">
                  {checkbox.length > 0 && (
                    <tr>
                      <th></th>
                      <th>
                        <BotoesDeAcao
                          handleDownloadsItems={handleDownloadsEmployees}
                          handleDeleteItems={handleDeleteEmployees}
                        />
                      </th>
                    </tr>
                  )}
                  <tr>
                    <th scope="col">
                      <div className="d-flex justify-content-end align-items-center">
                        <Input
                          type="checkbox"
                          onChange={handleSelectAllCheckbox}
                        />
                      </div>
                    </th>
                    <th scope="col">Nome</th>
                    <th scope="col">Nascimento</th>
                    <th scope="col">Cargo</th>
                    <th scope="col">Endereço</th>
                    <th scope="col">Status</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  {employees.map((employees, index) => (
                    <Tr
                      key={index}
                      onClick={() => {
                        setOpen(!open);
                        setEmployee(employees);
                      }}
                    >
                      <td
                        className="d-flex justify-content-end"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Input
                          checked={
                            checkbox.filter(
                              (check) => check.cpf === employees.cpf
                            ).length
                          }
                          value={employees.cpf}
                          type="checkbox"
                          onChange={handleChangeCheckbox}
                        />
                      </td>
                      <td>{employees.name}</td>
                      <td>{employees.dateBirth}</td>
                      <td>{employees.position}</td>
                      <td>{employees.address}</td>
                      <td>
                        <Badge color="" className="badge-dot">
                          <i className={getBadge(employees.status)} />
                          {employees.status}
                        </Badge>
                      </td>
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
                              Ativar
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Desativar
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Banir
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Excluir Definitivamente
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
          Colaborador
        </ModalHeader>
        <ModalBody>
          <Nav tabs className="mb-3">
            <NavItem>
              <NavLink
                href="#"
                onClick={() => setTab("Dados")}
                active={tab === "Dados"}
              >
                Dados
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="#"
                onClick={() => {
                  setInput(employee);
                  setTab("Editar");
                  setNewPhoto(!newPhoto);
                }}
                active={tab === "Editar"}
              >
                Editar
              </NavLink>
            </NavItem>
          </Nav>
          {tab === "Dados" ? (
            <Colaborador employee={employee} />
          ) : (
            <Form onSubmit={submitForm}>
              <EditarColaborador
                title="Editar Dados"
                input={input}
                handleChangeInput={handleChangeInput}
                handleSelectFile={handleSelectFile}
                newPhoto={newPhoto}
              />
            </Form>
          )}
        </ModalBody>
        <ModalFooter className="d-flex justify-content-end">
          <Button color="secondary" onClick={() => setOpen(!open)}>
            Sair
          </Button>
        </ModalFooter>
      </Modal>
      <Modal
        isOpen={openAddContract}
        toggle={() => {
          setOpenAddContract(!openAddContract);
        }}
        size="lg"
      >
        <ModalHeader
          toggle={() => {
            setOpenAddContract(!openAddContract);
          }}
        >
          Adicionar Novo Contrato
        </ModalHeader>
        <Form onSubmit={submitForm}>
          <ModalBody>
            <EditarColaborador
              title="Adicionar Colaborador"
              input={input}
              handleChangeInput={handleChangeInput}
              handleSelectFile={handleSelectFile}
              newPhoto={newPhoto}
            />
          </ModalBody>
          <ModalFooter>
            <Button type="button" color="primary">
              Adicionar
            </Button>
            <Button
              color="secondary"
              onClick={() => {
                setOpenAddContract(!openAddContract);
              }}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Form>
      </Modal>
    </>
  );
};

export default Colaboradores;
