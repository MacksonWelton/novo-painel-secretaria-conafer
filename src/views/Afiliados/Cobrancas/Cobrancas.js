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
  Col,
} from "reactstrap";

import Header from "../../../components/Headers/Header";

import { deleteCharges, downloadCharges, newCharges } from "../../../redux/actions/Cobrancas";

import CobrancasData from "./CobrancasData";
import ProgressCard from "../../../components/ProgressCard/ProgressCard";
import { Tr } from "./Styles";
import { InputStyled } from "./Styles";
import { CardHeaderStyled } from "./Styles";
import BotoesDeAcao from "../../../components/BotoesDeAcao/BotoesDeAcao";

const Orcamentos = () => {
  const dispatch = useDispatch();
  const charges = useSelector((state) => state.ChargesReducer.charges);

  useEffect(() => {
    dispatch(newCharges(CobrancasData));
  }, [dispatch]);

  const [open, setOpen] = useState(false);
  const [openAddCharge, setOpenAddCharge] = useState(false);
  const [charge, setCharge] = useState({});
  const [input, setInput] = useState();
  const [checkbox, setCheckbox] = useState([]);

  const handleChangeCheckbox = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setCheckbox([...checkbox, { id: value, checked }]);
    } else {
      setCheckbox(checkbox.filter((check) => check.id !== value));
    }
  };

  const handleSelectAllCheckbox = (event) => {
    const checked = event.target.checked;

    if (checked) {
      setCheckbox(
        charges.map((charge) => {
          return { id: charge.id, checked: true };
        })
      );
    } else {
      setCheckbox([]);
    }
  };

  const handleDownloadsCharges = () => {
    dispatch(downloadCharges(checkbox));
  };

  const handleDeleteCharges = () => {
    dispatch(deleteCharges(checkbox));
  };

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setInput({...input, [name]: value});
  };

  const submitForm = (event) => {
    event.preventDefault();
  };

  const getBadge = (status) => {
    switch (status) {
      case "Enviado":
        return "bg-blue";
      case "Atrasado":
        return "bg-yellow";
      case "Suspenso":
        return "bg-red";
      case "Pago":
        return "bg-green";
      default:
        return "primary";
    }
  };

  const CardData = [
    {
      title: "Enviados",
      progress: charges.filter((contract) => contract.status === "Enviado")
        .length,
      max: charges.length,
      icon: "fas fa-stopwatch",
      color: "blue",
    },
    {
      title: "Expirados",
      progress: charges.filter((contract) => contract.status === "Expirado")
        .length,
      max: charges.length,
      icon: "fas fa-exclamation-triangle",
      color: "yellow",
    },
    {
      title: "Declinados",
      progress: charges.filter((contract) => contract.status === "Declinado")
        .length,
      max: charges.length,
      icon: "fas fa-times",
      color: "red",
    },
    {
      title: "Aceitos",
      progress: charges.filter((contract) => contract.status === "Aceito")
        .length,
      max: charges.length,
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
                <h3 className="text-white mb-0">Lista de Cobranças</h3>
                <div className="d-flex align-items-center">
                  <InputStyled type="text" placeholder="Pesquisar..." />
                  <Button className="bg-transparent border-0">
                    <i className="fas fa-search text-white display-4"></i>
                  </Button>
                </div>
                <div>
                  <Button
                    color="primary"
                    onClick={() => setOpenAddCharge(!openAddCharge)}
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
                          handleDownloadsItems={handleDownloadsCharges}
                          handleDeleteItems={handleDeleteCharges}
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
                    <th scope="col">CPF ou CNPJ</th>
                    <th scope="col">Data de Cobrança</th>
                    <th scope="col">Data de Vencimento</th>
                    <th scope="col">Valor</th>
                    <th scope="col">Status</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  {charges.map((charge, index) => (
                    <Tr
                      key={index}
                      onClick={() => {
                        setOpen(!open);
                        setCharge(charge);
                      }}
                    >
                      <td
                        className="d-flex justify-content-end"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Input
                          checked={
                            checkbox.filter((check) => check.id === charge.id)
                              .length
                          }
                          value={charge.id}
                          type="checkbox"
                          onChange={handleChangeCheckbox}
                        />
                      </td>
                      <td>{charge.cpf_cnpj}</td>
                      <td>{charge.value}</td>
                      <td>{charge.date_of_charge}</td>
                      <td>{charge.due_date}</td>
                      <td>
                        <Badge color="" className="badge-dot">
                          <i className={getBadge(charge.status)} />
                          {charge.status}
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
          {charge.title}
        </ModalHeader>
        <ModalBody></ModalBody>
        <ModalFooter className="d-flex justify-content-end">
          <Button color="secondary" onClick={() => setOpen(!open)}>
            Sair
          </Button>
        </ModalFooter>
      </Modal>
      <Modal
        isOpen={openAddCharge}
        toggle={() => setOpenAddCharge(!openAddCharge)}
        size="lg"
      >
        <ModalHeader toggle={() => setOpenAddCharge(!openAddCharge)}>
          Adicionar Nova Cobrança
        </ModalHeader>
        <Form onSubmit={submitForm}>
          <ModalBody>
            <Row>
              <Col lg="8">
                <FormGroup>
                  <label className="form-control-label" htmlFor="name">
                    Nome Completo do Devedor
                  </label>
                  <Input
                    className="form-control-alternative"
                    id="name"
                    name="name"
                    onChange={handleChangeInput}
                  />
                </FormGroup>
              </Col>
              <Col lg="4">
                <FormGroup>
                  <label className="form-control-label" htmlFor="cpf_cnpj">
                    CNPJ ou CPF do Devedor
                  </label>
                  <Input
                    className="form-control-alternative"
                    name="cpf_cnpj"
                    id="cpf_cnpj"
                    onChange={handleChangeInput}
                  />
                </FormGroup>
              </Col>
              <Col lg="4">
                <FormGroup>
                  <label className="form-control-label" htmlFor="value">
                    Valor em R$
                  </label>
                  <Input
                    className="form-control-alternative"
                    name="value"
                    id="value"
                    onChange={handleChangeInput}
                  />
                </FormGroup>
              </Col>
              <Col lg="4">
                <FormGroup>
                  <label
                    className="form-control-label"
                    htmlFor="date_of_charge"
                  >
                    Date de Cobrança
                  </label>
                  <Input
                    className="form-control-alternative"
                    type="date"
                    name="date_of_charge"
                    id="date_of_charge"
                    onChange={handleChangeInput}
                  />
                </FormGroup>
              </Col>
              <Col lg="4">
                <FormGroup>
                  <label className="form-control-label" htmlFor="due_date">
                    Data de Vencimento
                  </label>
                  <Input
                    className="form-control-alternative"
                    type="date"
                    name="due_date"
                    id="due_date"
                    onChange={handleChangeInput}
                  />
                </FormGroup>
              </Col>
              <Col lg="12">
                <label className="form-control-label" htmlFor="description">
                  Descrição
                </label>
                <Input
                  className="form-control-alternative"
                  rows="6"
                  type="textarea"
                  id="description"
                  name="description"
                />
              </Col>
            </Row>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" type="submit">
              Salvar
            </Button>
            <Button
              color="secondary"
              onClick={() => setOpenAddCharge(!openAddCharge)}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Form>
      </Modal>
    </>
  );
};

export default Orcamentos;
