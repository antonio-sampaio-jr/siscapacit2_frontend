import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import {AuthContext} from "../../contexts/authContext.js";
import {useContext} from "react";

function NavigationBar() {
  const location = useLocation();
  const {loggedUser} = useContext(AuthContext); 

  if (location.pathname === "/") {
    return null;
  }
  
  return (
    <>
    {
        loggedUser.msg === "OkAdmin" ? 

    ( 
    <Navbar bg="primary" variant="primary" expand="lg">
      <Container>
        <Navbar.Brand>SisCAPACIT 2.0 - Área do ADMIN</Navbar.Brand>
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
            <Link
              className="btn btn-outline-light btn-lg m-1"
              role="button"
              to="/listarServidores"
            >
              Servidores
            </Link>
            <Link
              className="btn btn-outline-light btn-lg m-1"
              role="button"
              to="/listarCursos"
            >
              Cursos
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  ):
  (
    <Navbar bg="primary" variant="primary" expand="lg">
      <Container>
        <Navbar.Brand>SisCAPACIT 2.0 - Área do Servidor</Navbar.Brand>
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
  )
}</>
)
}
export default NavigationBar;
