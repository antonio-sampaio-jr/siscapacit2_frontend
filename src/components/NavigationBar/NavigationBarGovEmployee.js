import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

function NavigationBarGovEmployee() {
  const location = useLocation();

  if (location.pathname === "/") {
    return null;
  }

  return (
    <Navbar bg="primary" variant="primary" expand="lg">
      <Container>
        <Navbar.Brand>SisCAPACIT 2.0</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link
              className="btn btn-outline-light btn-lg m-1"
              role="button"
              to="/"
            >
              HomePage
            </Link>
          </Nav>
          <Nav.Link >
          <Link  className="btn btn-outline-light btn-lg m-1"
              role="button"
          to="/listarCursosAluno" style={{ textDecoration: "none" }}>
          Área do Aluno</Link></Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBarGovEmployee;
