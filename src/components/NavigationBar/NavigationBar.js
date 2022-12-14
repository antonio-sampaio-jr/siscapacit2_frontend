import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {AuthContext} from "../../contexts/authContext.js";
import {useContext} from "react";

function NavigationBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const {loggedUser} = useContext(AuthContext); 

  if (location.pathname === "/") {
    return null;
  }

  const handleLogout = () => {
    localStorage.removeItem("loggedUser");
    navigate("/");
  };
  console.log(loggedUser);
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
            <Button variant="danger" onClick={handleLogout}>
                Logout
            </Button>
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
        </Navbar.Collapse>
        <Button variant="danger" onClick={handleLogout}>
                Logout
        </Button>
      </Container>
    </Navbar>
  )
}</>
)
}
export default NavigationBar;
