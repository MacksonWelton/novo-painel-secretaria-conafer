import React, { useState } from "react";
import Header from "components/Headers/Header";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Row,
} from "reactstrap";

const Secretaria = () => {

  const [input, setInput] = useState({
    name: ""
  })

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setInput({...input, [name]: value });
  }

  return (
    <>
      <Header />
      <Container className="mt--7" fluid>
        <Row className="mt-5">
          <div className="col">
            <Card className="shadow">
              <CardHeader>
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">Editar Secretaria</h3>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                  <Col lg="6">
                    <FormGroup>
                      <label className="form-control-label" htmlFor="name">
                        Nome da Secretaria
                      </label>
                      <Input
                        className="form-control-alternative"
                        id="name"
                        name="name"
                        onChange={handleChangeInput}
                        placeholder="Ex: Secretaria de Tecnologia da Informação"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                </Form>
              </CardBody>
              <CardFooter>
                <Button color="primary">Salvar</Button>
              </CardFooter>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Secretaria;
