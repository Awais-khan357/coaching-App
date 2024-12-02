import { Row, Col, Card, CardBody } from "reactstrap";
import "./Custom.css";

const Customer = () => {
  const teamData = [
    "Team No 1",
    "Team No 2",
    "Team No 3",
    "Team No 4",
    "Team No 4",
    "Team No 4",
  ];
  const practicePlans = [
    "2-11-24 (10/20/20/35/10) 4:30 Starting Practice Plan 1",
    "2-11-24 (10/20/20/35/10) 4:30 Starting Practice Plan 2",
    "2-11-24 (10/20/20/35/10) 4:30 Starting Practice Plan 3",
    "2-11-24 (10/20/20/35/10) 4:30 Starting Practice Plan 4",
    "2-11-24 (10/20/20/35/10) 4:30 Starting Practice Plan 2",
    "2-11-24 (10/20/20/35/10) 4:30 Starting Practice Plan 3",
    "2-11-24 (10/20/20/35/10) 4:30 Starting Practice Plan 4",
  ];
  const depthChart = [
    "Navy Team",
    "Army Team",
    "Lady Team",
    "Air Force Team",
    "Air Force Team",
    "Air Force Team",
  ];

  const renderList = (items) => (
    <ul className="scroll-content mb-3">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );

  return (
    <div className="custom-container">
      <Row>
        {/* Column 1 */}
        <Col sm="12" md="3">
          <Card className="scroll-card">
            <CardBody>
              <h6 className="fw-semibold text-primary mb-3">Add Team</h6>
              {renderList(teamData)}
              <a
                href="/"
                className="show-all-btn fw-semibold justify-content-center d-flex"
              >
                Show All &gt;
              </a>
            </CardBody>
          </Card>
        </Col>

        <Col sm="12" md="6">
          <Card className="scroll-card">
            <CardBody>
              <h6 className="fw-semibold text-primary mb-3">Practice Plans</h6>
              {renderList(practicePlans)}
              <a
                href="/"
                className="show-all-btn fw-semibold justify-content-center d-flex"
              >
                Show All &gt;
              </a>
            </CardBody>
          </Card>
        </Col>

        <Col sm="12" md="3">
          <Card className="scroll-card">
            <CardBody>
              <h6 className="fw-semibold text-primary mb-3">Depth Chart</h6>
              {renderList(depthChart)}
              <a
                href="/"
                className="show-all-btn fw-semibold justify-content-center d-flex"
              >
                Show All &gt;
              </a>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Customer;
