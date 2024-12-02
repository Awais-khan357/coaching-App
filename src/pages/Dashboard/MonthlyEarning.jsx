import React from "react";
import { Row, Col, Card, CardBody } from "reactstrap";
import "./Montly.css";

const MonthlyEarning = () => {
  const coaches = [
    {
      name: "Z.Zampa",
      role: "Senior",
      img: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
    },
    {
      name: "C.Adam",
      role: "Senior",
      img: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
    },
    {
      name: "Mike",
      role: "Senior",
      img: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
    },
    {
      name: "Red Buckens",
      role: "Senior",
      img: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
    },
    {
      name: "Jane Doe",
      role: "Senior",
      img: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
    },
    {
      name: "Smith",
      role: "Senior",
      img: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
    },
  ];

  return (
    <React.Fragment>
      <Card className="overflow-hidden">
        <CardBody className="pt-0">
          <Row>
            <Col className="mt-3" sm="6" lg="9">
              <span className="fs-4 fw-bolder text-primary text-left">
                Sub Coaches
              </span>
            </Col>
            <Col sm="6" lg="3" className="text-end mt-4">
              <a href="/" className="mx-3 fw-bold">
                View All
              </a>
              <a href="/" className="mx-3 fw-bold">
                Add More
              </a>
            </Col>
          </Row>
          <Row>
            <Col sm="12" className="justify-content-center d-flex">
              <div className="sub-coaches-list d-flex overflow-auto">
                {coaches.map((coach, index) => (
                  <div
                    key={index}
                    className="coach-item d-flex align-items-center gap-3 p-2"
                  >
                    <div
                      className="position-relative"
                      style={{
                        height: "50px",
                        width: "50px",
                      }}
                    >
                      <img
                        src={coach.img}
                        alt={`${coach.name}'s profile`}
                        className="rounded-circle img-fluid"
                        style={{
                          objectFit: "cover",
                          height: "100%",
                          width: "100%",
                        }}
                      />
                    </div>
                    <div className="d-flex flex-column">
                      <span className="fw-semibold text-primary">
                        {coach.name}
                      </span>
                      <span className="text-muted small">{coach.role}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </React.Fragment>
  );
};

export default MonthlyEarning;
