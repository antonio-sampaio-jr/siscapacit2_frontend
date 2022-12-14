import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

function NavBarServCourses(props) {
  const location = useLocation();

  if (location.pathname === "/") {
    return null;
  }

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/pageServidor" style={{ textDecoration: "none" }}>
              Todos os Cursos
            </Link>{" "}
          </Navbar.Brand>
          <Nav className="me-auto">
            <NavDropdown title="Por situação" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={() => props.setSituacao("")}>
                Todos
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => props.setSituacao("Inscrições Abertas")}
              >
                Inscrições Abertas
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => props.setSituacao("Inscrições Encerradas")}
              >
                Inscrições encerradas
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => props.setSituacao("Em breve")}>
                Em breve
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Por tipo" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={() => props.setTipo("")}>
                Todos
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => props.setTipo("Aperfeiçoamento")}
              >
                Aperfeiçoamento
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => props.setTipo("Especialização")}>
                Especialização
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => props.setTipo("Mestrado")}>
                Mestrado
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => props.setTipo("Doutorado")}>
                Doutorado
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

/*   <Nav.Link href="#home">Aperfeiçoamento</Nav.Link>
            <Nav.Link href="#features">Especialização</Nav.Link>
            <Nav.Link href="#pricing">Mestrado</Nav.Link>
            <Nav.Link href="#pricing">Doutorado</Nav.Link> */

export default NavBarServCourses;
