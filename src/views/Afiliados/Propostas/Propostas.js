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

import {
  newProposals,
  newComment,
  downloadProposals,
  deleteProposals,
} from "../../../redux/actions/Propostas";

import PropostasData from "./PropostasData";
import { Tr } from "./styles";
import ProgressCard from "components/ProgressCard/ProgressCard";
import { InputStyled } from "views/Contratos/styles";
import { CardHeaderStyled } from "views/Contratos/styles";
import Header from "../../../components/Headers/Header";
import BotoesDeAcao from "../../../components/BotoesDeAcao/BotoesDeAcao";

const Propostas = () => {
  const dispatch = useDispatch();
  const proposals = useSelector((state) => state.ProposalReducer.proposals);

  useEffect(() => {
    dispatch(newProposals(PropostasData));
  }, [dispatch]);

  const [open, setOpen] = useState(false);
  const [proposal, setProposal] = useState({});
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
        proposals.map((proposal) => {
          return { id: proposal.id, checked: true };
        })
      );
    } else {
      setCheckbox([]);
    }
  };

  const handleDownloadsProposals = () => {
    dispatch(downloadProposals(checkbox));
  };

  const handleDeleteProposals = () => {
    dispatch(deleteProposals(checkbox));
  };

  const handleChangeInput = (event) => {
    setInput(event.target.value);
  };

  const submitForm = (event) => {
    event.preventDefault();
    dispatch(newComment(input));
  };

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
      title: "Enviadas",
      progress: proposals.filter((contract) => contract.status === "Enviado")
        .length,
      max: proposals.length,
      icon: "fas fa-paper-plane",
      color: "blue",
    },
    {
      title: "Expiradas",
      progress: proposals.filter((contract) => contract.status === "Expirado")
        .length,
      max: proposals.length,
      icon: "fas fa-exclamation-triangle",
      color: "yellow",
    },
    {
      title: "Declinadas",
      progress: proposals.filter((contract) => contract.status === "Declinado")
        .length,
      max: proposals.length,
      icon: "fas fa-times",
      color: "red",
    },
    {
      title: "Aceitas",
      progress: proposals.filter((contract) => contract.status === "Aceito")
        .length,
      max: proposals.length,
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
              <CardHeaderStyled className="bg-transparent border-0 d-flex justify-content-between align-items-center">
                <h3 className="text-white mb-0">Lista de Propostas</h3>
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
                  {checkbox.length > 0 && (
                    <tr>
                      <th></th>
                      <th>
                        <BotoesDeAcao
                          handleDownloadsItems={handleDownloadsProposals}
                          handleDeleteItems={handleDeleteProposals}
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
                    <th scope="col">Proposta</th>
                    <th scope="col">Valor</th>
                    <th scope="col">Data de Criação</th>
                    <th scope="col">Data de Expiração</th>
                    <th scope="col">Status</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  {proposals.map((proposal, index) => (
                    <Tr
                      key={index}
                      onClick={(event) => {
                        event.stopPropagation();
                        setOpen(!open);
                        setProposal(proposal);
                      }}
                    >
                      <td
                        className="d-flex justify-content-end"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Input
                          checked={
                            checkbox.filter((check) => check.id === proposal.id)
                              .length
                          }
                          value={proposal.id}
                          type="checkbox"
                          onChange={handleChangeCheckbox}
                        />
                      </td>
                      <td>{proposal.name}</td>
                      <td>{proposal.value}</td>
                      <td>{proposal.createdIn}</td>
                      <td>{proposal.expirationDate}</td>
                      <td>
                        <Badge color="" className="badge-dot">
                          <i className={getBadge(proposal.status)} />
                          {proposal.status}
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
          {proposal.name}
        </ModalHeader>
        <ModalBody>
          <>
            <p className="mb-0">{proposal.description}</p>
            <p className="h6 mb-3">Criado em: {proposal.createdIn}</p>
          </>
          <>
            {proposal.comments &&
              proposal.comments.map((comment, index) => (
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

export default Propostas;
