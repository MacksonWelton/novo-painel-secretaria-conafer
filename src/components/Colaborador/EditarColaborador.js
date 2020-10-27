import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  FormGroup,
  Input,
  Row,
} from "reactstrap";

import { mask } from "remask";

const EditarColaborador = ({
  title,
  input,
  handleChangeInput,
  handleSelectFile,
  newPhoto,
}) => {

  return (
    <Card className="bg-secondary shadow">
      <CardHeader className="bg-white border-0">
        <Row className="align-items-center">
          <Col xs="8">
            <h3 className="mb-0">{title}</h3>
          </Col>
        </Row>
      </CardHeader>
      <CardBody>
        <>
          <h6 className="heading-small text-muted mb-4">Foto de Perfil</h6>
          <div className="pl-lg-4">
            <Row>
              <Col lg="3">
                <FormGroup> 
                    <img
                      className="w-100 rounded"
                      src={
                        newPhoto.photo
                          ? URL.createObjectURL(input.photo)
                          : input.photo
                      }
                      alt="..."
                    />
                </FormGroup>
              </Col>
              <Col lg="9" className="d-flex align-items-center">
                <FormGroup>
                  <label className="btn bg-light ml-1">
                    Selecione uma Foto de Perfil
                    <Input
                      className="d-none"
                      type="file"
                      onChange={handleSelectFile}
                      accept="image/*"
                    />
                  </label>
                </FormGroup>
              </Col>
            </Row>
          </div>
          <h6 className="heading-small text-muted mb-4">Dados Pessoais</h6>
          <div className="pl-lg-4">
            <Row>
              <Col lg="6">
                <FormGroup>
                  <label className="form-control-label" htmlFor="name">
                    Nome
                  </label>
                  <Input
                    className="form-control-alternative"
                    value={input.name}
                    onChange={handleChangeInput}
                    id="name"
                    name="name"
                    placeholder="Ex: Maria da Silva"
                    type="text"
                  />
                </FormGroup>
              </Col>
              <Col lg="6">
                <FormGroup>
                  <label className="form-control-label" htmlFor="sex">
                    Sexo
                  </label>
                  <Input
                    className="form-control-alternative"
                    id="sex"
                    name="sex"
                    type="select"
                    value={input.sex}
                    onChange={handleChangeInput}
                  >
                    <option value={undefined} hidden>
                      Escolha uma opção
                    </option>
                    <option value="Masculino">Masculino</option>
                    <option value="Feminino">Feminino</option>
                    <option value="Outro">Outro</option>
                  </Input>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col lg="6">
                <FormGroup>
                  <label className="form-control-label" htmlFor="dateBirth">
                    Data de Nascimento
                  </label>
                  <Input
                    className="form-control-alternative"
                    id="dateBirth"
                    name="dateBirth"
                    value={mask(input.dateBirth, ["99/99/9999"])}
                    onChange={handleChangeInput}
                    type="text"
                  />
                </FormGroup>
              </Col>
              <Col lg="6">
                <FormGroup>
                  <label className="form-control-label" htmlFor="marital_status">
                    Estado Civil
                  </label>
                  <Input
                    className="form-control-alternative"
                    id="marital_status"
                    type="select"
                    value={input.marital_status}
                    name="marital_status"
                    onChange={handleChangeInput}
                  >
                    <option value={undefined} hidden>
                      Escolha uma opção
                    </option>
                    <option value="Solteiro(a)">Solteiro(a)</option>
                    <option value="Casado(a)">Casado(a)</option>
                    <option value="Divorciado(a)/Separado(a)">
                      Divorciado/Separado
                    </option>
                    <option value="Viúvo">Viúvo</option>
                    <option value="Outro">Outro</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col lg="6">
                <FormGroup>
                  <label className="form-control-label" htmlFor="rg">
                    RG
                  </label>
                  <Input
                    className="form-control-alternative"
                    value={input.rg}
                    onChange={handleChangeInput}
                    id="rg"
                    name="rg"
                    placeholder="Ex: 99918748"
                    type="text"
                  />
                </FormGroup>
              </Col>
              <Col lg="6">
                <FormGroup>
                  <label className="form-control-label" htmlFor="organ_issuing">
                    Órgão Emissor
                  </label>
                  <Input
                    className="form-control-alternative"
                    value={input.organ_issuing}
                    onChange={handleChangeInput}
                    id="organ_issuing"
                    name="organ_issuing"
                    placeholder="Ex: SEDS-SP"
                    type="text"
                  />
                </FormGroup>
              </Col>
              <Col lg="6">
                <FormGroup>
                  <label className="form-control-label" htmlFor="emission_date">
                    Data de Emissão
                  </label>
                  <Input
                    className="form-control-alternative"
                    value={mask(input.emission_date, ["99/99/9999"])}
                    onChange={handleChangeInput}
                    id="emission_date"
                    name="emission_date"
                    placeholder="Ex: 21/11/2019"
                    type="text"
                  />
                </FormGroup>
              </Col>
              <Col lg="6">
                <FormGroup>
                  <label className="form-control-label" htmlFor="cpf">
                    CPF
                  </label>
                  <Input
                    className="form-control-alternative"
                    value={mask(input.cpf, ["999.999.999-99"])}
                    onChange={handleChangeInput}
                    id="cpf"
                    name="cpf"
                    placeholder="Ex: 111.111.111-55"
                    type="text"
                  />
                </FormGroup>
              </Col>
              <Col lg="6">
                <FormGroup>
                  <label className="form-control-label" htmlFor="voter_title">
                    Título de Eleitor
                  </label>
                  <Input
                    className="form-control-alternative"
                    value={input.voter_title}
                    onChange={handleChangeInput}
                    id="voter_title"
                    name="voter_title"
                    placeholder="Ex: 5544112233"
                    type="text"
                  />
                </FormGroup>
              </Col>
              <Col lg="6">
                <FormGroup>
                  <label
                    className="form-control-label"
                    htmlFor="electoral_zone"
                  >
                    Zona Eleitoral
                  </label>
                  <Input
                    className="form-control-alternative"
                    value={input.electoral_zone}
                    onChange={handleChangeInput}
                    id="electoral_zone"
                    name="electoral_zone"
                    placeholder="Ex: 21"
                    type="text"
                  />
                </FormGroup>
              </Col>
              <Col lg="6">
                <FormGroup>
                  <label className="form-control-label" htmlFor="section">
                    Seção
                  </label>
                  <Input
                    className="form-control-alternative"
                    value={input.section}
                    onChange={handleChangeInput}
                    id="section"
                    name="section"
                    placeholder="Ex: 55"
                    type="text"
                  />
                </FormGroup>
              </Col>
              <Col lg="6">
                <FormGroup>
                  <label className="form-control-label" htmlFor="email">
                    Seção
                  </label>
                  <Input
                    className="form-control-alternative"
                    value={input.email}
                    onChange={handleChangeInput}
                    id="email"
                    name="email"
                    placeholder="Ex: email@conafer.org.br"
                    type="email"
                  />
                </FormGroup>
              </Col>
              <Col lg="6">
                <FormGroup>
                  <label className="form-control-label" htmlFor="position">
                    Cargo
                  </label>
                  <Input
                    className="form-control-alternative"
                    value={input.position}
                    onChange={handleChangeInput}
                    id="position"
                    name="position"
                    placeholder="Ex: Desenvolvedor de Sistemas"
                    type="text"
                  />
                </FormGroup>
              </Col>
            </Row>
          </div>
          <hr className="my-4" />
          {/* Address */}
          <h6 className="heading-small text-muted mb-4">Dados de Endereço</h6>
          <div className="pl-lg-4">
            <Row>
              <Col lg="12">
                <FormGroup>
                  <label className="form-control-label" htmlFor="address">
                    Endereço
                  </label>
                  <Input
                    className="form-control-alternative"
                    id="address"
                    name="address"
                    value={input.address}
                    onChange={handleChangeInput}
                    placeholder="Ex: Rua Tavares Bastos"
                    type="text"
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col lg="4">
                <FormGroup>
                  <label className="form-control-label" htmlFor="cep">
                    CEP
                  </label>
                  <Input
                    className="form-control-alternative"
                    name="cep"
                    id="cep"
                    value={input.cep}
                    onChange={handleChangeInput}
                    placeholder="Ex: 57600000"
                    type="text"
                  />
                </FormGroup>
              </Col>
              <Col lg="4">
                <FormGroup>
                  <label className="form-control-label" htmlFor="city">
                    Cidade
                  </label>
                  <Input
                    className="form-control-alternative"
                    id="city"
                    name="city"
                    value={input.city}
                    onChange={handleChangeInput}
                    placeholder="Ex: São Paulo"
                    type="text"
                  />
                </FormGroup>
              </Col>
              <Col lg="4">
                <FormGroup>
                  <label className="form-control-label" htmlFor="input-country">
                    Estado
                  </label>
                  <Input
                    className="form-control-alternative"
                    id="state"
                    name="state"
                    value={input.state}
                    onChange={handleChangeInput}
                    type="select"
                  >
                    <option value={undefined} hidden>
                      Escolha uma opção
                    </option>
                    <option value="Acre">Acre</option>
                    <option value="Alagoas">Alagoas</option>
                    <option value="Amapá">Amapá</option>
                    <option value="Amazonas">Amazonas</option>
                    <option value="Bahia">Bahia</option>
                    <option value="Ceará">Ceará</option>
                    <option value="Distrito Federal">Distrito Federal</option>
                    <option value="Espírito Santo">Espírito Santo</option>
                    <option value="Goiás">Goiás</option>
                    <option value="Maranhão">Maranhão</option>
                    <option value="Mato Grosso">Mato Grosso</option>
                    <option value="Mato Grosso do Sul">
                      Mato Grosso do Sul
                    </option>
                    <option value="Minas Gerais">Minas Gerais</option>
                    <option value="Pará">Pará</option>
                    <option value="Paraíba">Paraíba</option>
                    <option value="Paraná">Paraná</option>
                    <option value="Pernambuco">Pernambuco</option>
                    <option value="Piauí">Piauí</option>
                    <option value="Rio de Janeiro">Rio de Janeiro</option>
                    <option value="Rio Grande do Norte">
                      Rio Grande do Norte
                    </option>
                    <option value="Rio Grande do Sul">Rio Grande do Sul</option>
                    <option value="Rondônia">Rondônia</option>
                    <option value="Roraima">Roraima</option>
                    <option value="Santa Catarina">Santa Catarina</option>
                    <option value="São Paulo">São Paulo</option>
                    <option value="Sergipe">Sergipe</option>
                    <option value="Tocantins">Tocantins</option>
                  </Input>
                </FormGroup>
              </Col>
            </Row>
          </div>
        </>
      </CardBody>
    </Card>
  );
};

export default EditarColaborador;
