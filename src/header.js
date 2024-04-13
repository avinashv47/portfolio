import "./App.css";
import AboutMe from "./about-me";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import pic from "./assets/profile.png";

function Header() {
  return (
    <div className="text-center">
      <Container>
        <Row>
          <Col xs={12} md={12}>
            <Image src={pic} roundedCircle fluid width={180} height={180} />
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 4, offset: 4 }}>
            <AboutMe></AboutMe>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;
