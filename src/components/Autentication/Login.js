import { useState, useContext } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
//import { api } from "../../api/api.js";
import axios from "axios";
//import { AuthContext } from "../../contexts/authContext.js";

function Login({ apiURL, apiURLAdmin }) {
  const navigate = useNavigate();
  //const { setLoggedUser } = useContext(AuthContext);
  const [form, setForm] = useState({
    email: "",
    senha: "",
    perfil: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let response;
    try {
      if (form.perfil === "1") {
        //Admin
        response = await axios.post(apiURLAdmin + "/autenticarAdmin", form);
      } else if (form.perfil === "2") {
        //Servidor Público
        response = await axios.post(apiURL + "/autenticarServidor", form);
      }

      //setLoggedUser({ ...response.data });
      //localStorage.setItem("loggedUser", JSON.stringify(response.data));

      if (response.data.msg === "OkAdmin") navigate("/listarServidores");
      else if (response.data.msg === "OkGovEmployee")
        navigate("/listarCursosAluno");
      else navigate("/");

      toast.success("Login realizado com sucesso", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      console.log(error.response.data.msg);

      toast.error("Não foi possível fazer o login", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <Container
      style={{ height: "100vh" }}
      className="d-flex flex-column align-items-center justify-content-center"
    >
      <Card className="text-center blue " style={{ width: "50rem" }}>
        <Card.Header className="fs-2 p-3 mb-2 bg-primary text-white">
          {" "}
          SISCAPACIT{" "}
        </Card.Header>
        <Form onSubmit={handleSubmit}  style={{ width: "100%" }}className=" d-flex flex-column align-items-center justify-content-center">
          <Form.Group className="mb-3 " style={{ width: "70%" }}>
            <Form.Label>Endereço de e-mail</Form.Label>
            <Form.Control 
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Insira o endereço de e-mail cadastrado"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" style={{ width: "70%" }}>
            <Form.Label>Senha</Form.Label>
            <Form.Control
              type="password"
              name="senha"
              value={form.senha}
              onChange={handleChange}
              placeholder="Insira a senha cadastrada"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" style={{ width: "70%" }}>
            <Form.Label>Perfil</Form.Label>
            <Form.Select
              name="perfil"
              onChange={handleChange}
              aria-label="Perfil"
            >
              <option>Selecione o Perfil:</option>
              <option value="1">Administrador</option>
              <option value="2">Servidor Público</option>
            </Form.Select>
          </Form.Group>

          <Button className="my-3" variant="dark" type="submit">
            Entrar no Sistema
          </Button>
        </Form>
        <Form.Text>
          Você ainda não alterou a sua Senha Padrão? Altere-a
          <Link
            className="text-warning fw-bold text-decoration-none"
            to="/register"
          >
            {" "}
            Agora!
          </Link>
        </Form.Text>
      </Card>
    </Container>
  );
}

export default Login;
