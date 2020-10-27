import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap";

import Board from "components/Projetos/Board/Board";
import Header from "components/Headers/Header";
import ScrollContainer from "react-indiana-drag-scroll";

const Projeto = () => {
  const history = useHistory();

  const project = useSelector((state) => state.ProjectsReducer.project);

  if (Object.keys(project).length === 0) {
    history.goBack();
    return <></>;
  }

  return (
    <>
      <Header>
        <Card className="ml-3">
          <CardBody>
            <Row>
              <Col lg="12" className="mb-3">
                Projeto: <b>{project.name}</b>
              </Col>
              <Col lg="12">
                <Button color="primary">Adicionar Lista</Button>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Header>
      <Container className="mt--7" fluid>
        <Card className="bg-default shadow">
          <ScrollContainer
            horizontal
            ignoreElements=".container"
            hideScrollbars
          >
            <Board projectContent={project.project_items} />
          </ScrollContainer>
        </Card>
      </Container>
    </>
  );
};

export default Projeto;
