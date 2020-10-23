import React from "react";
import { Col, Row, Card, CardBody, CardHeader } from "reactstrap";

const Colaborador = ({ employee }) => {
  return (
    <Card className="bg-secondary shadow">
      <CardHeader className="bg-white border-0">
        <Row className="align-items-center">
          <Col xs="8">
            <h3 className="mb-0">Dados de Colaborador</h3>
          </Col>
        </Row>
      </CardHeader>
      <Row className="d-flex justify-content-center mb-4">
        <img className="w-25 rounded-circle" src={employee.photo} alt="..." />
      </Row>
      <CardBody>
        <>
          <h6 className="heading-small text-muted mb-4">Dados Pessoais</h6>
          <div className="pl-lg-4">
            <Row className="mb-3">
              <Col lg="6">
                <p>
                  <b>Nome:</b> {employee.name}
                </p>
              </Col>
              <Col lg="6">
                <p>
                  <b>Sexo:</b> {employee.sex}
                </p>
              </Col>
              <Col lg="6">
                <p>
                  <b>Data de Nascimento:</b> {employee.dateBirth}
                </p>
              </Col>
              <Col lg="6">
                <p>
                  <b>Estado Civil:</b> {employee.marital_status}
                </p>
              </Col>
              <Col lg="6">
                <p>
                  <b>RG:</b> {employee.rg}
                </p>
              </Col>
              <Col lg="6">
                <p>
                  <b>Órgão Emissor:</b> {employee.organ_issuing}
                </p>
              </Col>
              <Col lg="6">
                <p>
                  <b>Data de Emissão:</b> {employee.emission_date}
                </p>
              </Col>
              <Col lg="6">
                <p>
                  <b>CPF:</b> {employee.cpf}
                </p>
              </Col>
              <Col lg="6">
                <p>
                  <b>Título de Eleitor:</b> {employee.voter_title}
                </p>
              </Col>
              <Col lg="6">
                <p>
                  <b>Zona Eleitoral:</b> {employee.electoral_zone}
                </p>
              </Col>
              <Col lg="6">
                <p>
                  <b>Seção:</b> {employee.section}
                </p>
              </Col>
              <Col lg="6">
                <p>
                  <b>Email:</b> {employee.email}
                </p>
              </Col>
              <Col lg="6">
                <p>
                  <b>Cargo:</b> {employee.position}
                </p>
              </Col>
            </Row>
          </div>
          <hr className="my-4" />
          <h6 className="heading-small text-muted mb-4">Dados de Endereço</h6>
          <div className="pl-lg-4">
            <Row>
              <Col lg="12">
                <p>
                  <b>Endereço:</b> {employee.address}
                </p>
              </Col>
              <Col lg="4">
                <p>
                  <b>CEP:</b> {employee.cep}
                </p>
              </Col>
              <Col lg="4">
                <p>
                  <b>Cidade:</b> {employee.city}
                </p>
              </Col>
              <Col lg="4">
                <p>
                  <b>Estado:</b> {employee.state}
                </p>
              </Col>
            </Row>
          </div>
        </>
      </CardBody>
    </Card>
  );
};

export default Colaborador;
