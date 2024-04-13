import { NavLink, Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function NavBar() {
  return (
    <div className="app-body-wrapper">
      <Container className="app-container">
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <ul className="nav-links">
              <li>
                <NavLink to="/" className="link">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/skills" className="link">
                  Skills
                </NavLink>
              </li>
              <li>
                <NavLink to="/work" className="link">
                  Work
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="link">
                  Contact
                </NavLink>
              </li>
            </ul>
          </Col>
        </Row>

        <div>
          <Outlet />
        </div>
      </Container>
    </div>
  );
}
export default NavBar;
