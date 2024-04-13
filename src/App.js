// import { Row } from "react-bootstrap";
import "./App.css";
import Header from "./header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function App() {
  return (
    <div>
      <Container>
        <Row>
          <Header></Header>
        </Row>
      </Container>
    </div>
  );
}

export default App;
