import React from "react";
import { Container, Row, Col } from "reactstrap";

import WelcomeComp from "./WelcomeComp";
import MonthlyEarning from "./MonthlyEarning";
import Customer from "./Customer";
import Section from "./Section";

const Dashboard = () => {
  document.title = "Coaching App";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Row>
            <Col xl="12">
              <WelcomeComp />
              <MonthlyEarning />
            </Col>
          </Row>
          <Customer />
          <Section />
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
