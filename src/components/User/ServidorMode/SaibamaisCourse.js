import { Button, Container, Card, Col, Form, ListGroup } from "react-bootstrap";
import NavBarServMod from "./NavBarSerMod";
import NavBarServCourses from "./NavBarServCourses";
import ServPage from "./ServPage";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { getServidorById, login, matricularCurso } from "./api";

function SaibamaisCourse({ apiUrlCourses }) {
  const { id } = useParams();
  const [data, setData] = useState({ periodoInscricao: "" });
  const [dadosServidor, setDadosServidor] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://ironrest.cyclic.app/cursos/${id}`
        );
        setData(response.data);
        console.log(response);
        console.log(response.data.periodoInscricao.slice(13));
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [id]);

  const matricular = async () => {
    const idServidor = localStorage.getItem("idServidor");
    const idCurso = data._id;
    await matricularCurso(idCurso, idServidor);
    navigate("/pageServidor");
  };

  const desmatricular = async () => {
    const idServidor = localStorage.getItem("idServidor");
    const idCurso = data._id;
    await matricularCurso(idCurso, idServidor);
    navigate("/pageServidor");
  };

  return (
    <div>
      <NavBarServMod />
      <Container>
        <Card
          className="mb-3 mt-3 d-flex align-items-center justify-content-center "
          style={{ width: "30rem" }}
        >
          <Card.Img variant="top" src={data.foto} />
        </Card>
        <h2 className="mb-5 mt-5">{data.nome}</h2>

        <Col>
          <ListGroup.Item action variant="primary">
            Descrição: {data.descricao}
          </ListGroup.Item>
          <ListGroup.Item action variant="warning">
            Período de inscrição: {data.situacao}
          </ListGroup.Item>
          <ListGroup variant="flush">
            <ListGroup.Item action variant="success">
              Forma de realização: {data.formaRealizacao}
            </ListGroup.Item>
            <ListGroup.Item action variant="secondary">
              Local: {data.local}
            </ListGroup.Item>
            <ListGroup.Item action variant="success">
              Ofertante: {data.ofertante}
            </ListGroup.Item>
            <ListGroup.Item action variant="success">
              Tipo: {data.tipo}
            </ListGroup.Item>
            <ListGroup.Item action variant="warning">
              Período de inscrição: {data.periodoInscricao}
            </ListGroup.Item>
            <ListGroup.Item action variant="warning">
              Período de realização: {data.periodoRealizacao}
            </ListGroup.Item>
          </ListGroup>
        </Col>

        <br />

        {data.periodoInscricao.slice(13) > Date.now() ? (
          <Button
            className="p-4 mb-3"
            variant="warning"
            onClick={desmatricular}
          >
            Cancelar matrícula
          </Button>
        ) : (
          <Button className="p-4 mb-3" variant="success" onClick={matricular}>
            <Link className="nav-link" to="/pageInscricao">
              Inscreva-se
            </Link>
          </Button>
        )}
      </Container>
    </div>
  );
}

export default SaibamaisCourse;
