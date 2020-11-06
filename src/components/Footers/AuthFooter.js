import React from "react";

// reactstrap components
import {  Row, Col } from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <Row className="align-items-center justify-content-xl-between">
          <Col xl="12">
            <div className="copyright text-center text-muted">
              © 2020 CONAFER Brasil. Todos os direitos reservados.
            </div>
          </Col>
        </Row>
      </footer>
    );
  }
}

export default Footer;