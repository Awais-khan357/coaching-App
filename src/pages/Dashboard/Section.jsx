import { Row, Col, Card, CardBody } from "reactstrap";
import "./Section.css";

const Section = () => {
  const positions = Array(20).fill("demo");
  const drills = [
    "1 on 1 Breakdown to a Shoulder Drive",
    "1 Then 2 to complete all",
    "10 seconds Escapes",
    "10 Takedowns",
    "100 Burpees for the drills",
  ];

  const renderButtons = (items) => (
    <div className="section-button-grid">
      {items.map((item, index) => (
        <button key={index} className="section-grid-button">
          {item}
        </button>
      ))}
    </div>
  );

  const renderList = (items) => (
    <ul className="section-scroll-content">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );

  return (
    <div className="section-custom-container">
      <Row>
        <Col sm="12" md="6">
          <Card className="section-scroll-card">
            <CardBody>
              <h6 className="text-primary fw-bold">Positions</h6>
              {renderButtons(positions)}
            </CardBody>
            <a href="/" className="section-manage-btn">
              Manage Positions &gt;
            </a>
          </Card>
        </Col>
        <Col sm="12" md="6">
          <Card className="section-scroll-card">
            <CardBody>
              <h6 className="text-primary fw-bold">Drills</h6>
              {renderList(drills)}
            </CardBody>
            <a href="/" className="section-manage-btn">
              Manage Drills &gt;
            </a>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Section;
