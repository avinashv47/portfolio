import ProgressBar from "react-bootstrap/ProgressBar";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
function MySkills() {
  return (
    <div>
      <Container>
        <Row>
          <Col md={{ span: 4, offset: 4 }}>
            <Card body className="skill-card">
              <label>Angular</label>
              <ProgressBar now={90}></ProgressBar>
              <label>HTML</label>
              <ProgressBar now={90}></ProgressBar>
              <label>CSS</label>
              <ProgressBar now={80}></ProgressBar>
              <label>Javascript</label>
              <ProgressBar now={90}></ProgressBar>
              <label>React</label>
              <ProgressBar now={60}></ProgressBar>
              <label>Python</label>
              <ProgressBar now={40}></ProgressBar>
              <label>Django</label>
              <ProgressBar now={40}></ProgressBar>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default MySkills;
