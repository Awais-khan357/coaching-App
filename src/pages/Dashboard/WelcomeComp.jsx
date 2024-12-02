import React from "react";

import { Row, Col, Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

import profileImg from "../../assets/images/profile-img.png";

const WelcomeComp = () => {
  return (
    <React.Fragment>
      <Card className="overflow-hidden">
        <CardBody className="pt-0">
          <Row>
            <Col sm="12">
              <h2 className="fs-1 fw-bolder mt-3 text-primary">Coaching App</h2>
            </Col>
            <Col sm="12">
              <span>
                <a className="text-secondary" href="http://">
                  n-Coaches
                </a>{" "}
                /
              </span>
              <span>
                <a className="text-secondary" href="http://">
                  n-Drills
                </a>{" "}
                /
              </span>
              <span>
                <a className="text-secondary" href="http://">
                  n-Position
                </a>{" "}
                /
              </span>
              <span>
                <a className="text-secondary" href="http://">
                  n-Practice Plans
                </a>
              </span>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </React.Fragment>
  );
};
export default WelcomeComp;
