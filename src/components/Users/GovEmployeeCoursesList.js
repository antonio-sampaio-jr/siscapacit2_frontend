import { Card, CardGroup, Col, Container, Row, Button } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavigationBarGovEmployee from "../NavigationBar/NavigationBarGovEmployee.js";
import NavigationBarGovEmployeeCourses from "../NavigationBar/NavigationBarGovEmployeeCourses.js";
// 1. Fazer Funcionar ;-)
function GovEmployeeCoursesList({ apiURLCourses }) {
  const [data, setData] = useState([]);
  const [fetching, setFetching] = useState(true);

  const [tipo, setTipo] = useState("")
  const [situacao, setSituacao] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(apiURLCourses+"/listarCursos");
        response.data.map((el) => {
          if (el.situacao == "Em andamento" || el.situacao == "Concluído") {
            el.situacao = "Inscrições Encerradas";
          }
          const dataFormatada = `${el.periodoInscricao.substr(
            6,
            4
          )}-${el.periodoInscricao.substr(3, 2)}-${el.periodoInscricao.substr(
            0,
            2
          )}`;
          const time = new Date(dataFormatada).getTime();
          if (time > new Date().getTime()) {
            el.situacao = "Em breve";
          }
        });
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <Container>
      <NavigationBarGovEmployee />
      <NavigationBarGovEmployeeCourses setSituacao={setSituacao} setTipo={setTipo} />
      <Row>

        <h2 className="mb-3 mt-3 text-muted">
          Bem-vindo, Servidor!
          <br />
        </h2>
        <h4 className="mb-4 text-muted">
          Aproveite os cursos de alto desempenho para a formação de habilidades
          nas várias áreas de conhecimento.
          <br /> <br />
        </h4>
        <h2 className="mb-4 text-muted">
          {" "}
          Confira os cursos com inscrições abertas:
        </h2>
        {data.map((current) => {
          console.log(tipo)
          if (current.situacao.search(situacao) != -1 && current.tipo.search(tipo) != -1) {
            return (
              <>
                <Card
                  key={current._id}
                  className="mb-3 mt-3 p-2 m-4 bg-light text-dark"
                  style={{ width: "19rem" }}
                >
                  <Card.Img variant="top" src={current.foto} />
                  <Card.Body>
                    <Card.Title className="mb-4">{current.nome}</Card.Title>
                    <Card.Subtitle className="mb-4 text-muted">
                      {current.formaRealizacao}
                    </Card.Subtitle>

                    <Button variant="outline-primary">
                      <Link
                        className="saibamais"
                        to={`/listarCursoAluno/${current._id}/6398e1849a7cc8fb4d7f1d33`} //incluir o id do Aluno
                        style={{ textDecoration: "none" }}
                      >
                      {/** 2. Fazer funcionar */}
                        Saiba mais
                      </Link>
                    </Button>
                  </Card.Body>
                </Card>
              </>
            );
          }
        })}
      </Row>
    </Container>
  );
}
export default GovEmployeeCoursesList;
