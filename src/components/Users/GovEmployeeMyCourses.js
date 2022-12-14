import { useEffect, useState } from "react";
import { Button, Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function GovEmployeeMyCourses({apiURL}) {
  
  const [allCourses, setAllCourses] = useState([]);
  const {idGovEmployee } = useParams();
  const navigate = useNavigate();
  
  useEffect(() => {
    try {
        const fetchCourse = async () => {
        const responseAll = await axios.get(`${apiURL}/listarCursosServidor/${idGovEmployee}`);
        setAllCourses(responseAll.data);
      }
      fetchCourse();
    } 
    catch (error) {
      console.log(error);
    }
  },[idGovEmployee]);

  const coursesInscAbertas = allCourses.filter(course=>
    course.situacao === "Inscrições Abertas");

  const renderCoursesInscAbertas = coursesInscAbertas.map((course)=>{
      return(
      <>
      <Card key={course._id}
      className="mb-3 mt-3 p-2 m-4 bg-light text-dark"
      style={{ width: "19rem" }}
      >
          <Card.Img variant="top" src={course.foto} />
          <Card.Body>
              <Card.Title className="mb-4">{course.nome}</Card.Title>
              <Card.Subtitle className="mb-4 text-muted">
                  {course.formaRealizacao}
              </Card.Subtitle>
      </Card.Body>
      </Card>
  </>)});

  const coursesAndamento = allCourses.filter(course=>
    course.situacao === "Em Andamento");

  const renderCoursesAndamento = coursesAndamento.map((course)=>{
      return(
      <>
      <Card key={course._id}
      className="mb-3 mt-3 p-2 m-4 bg-light text-dark"
      style={{ width: "19rem" }}
      >
          <Card.Img variant="top" src={course.foto} />
          <Card.Body>
              <Card.Title className="mb-4">{course.nome}</Card.Title>
              <Card.Subtitle className="mb-4 text-muted">
                  {course.formaRealizacao}
              </Card.Subtitle>
         
      </Card.Body>
      </Card>
  </>)});

  const coursesConcluidos = allCourses.filter(course=>
     course.situacao === "Concluído");
  
  const renderCoursesConcluidos = coursesConcluidos.map((course)=>{
      return(
      <>
      <Card key={course._id}
      className="mb-3 mt-3 p-2 m-4 bg-light text-dark"
      style={{ width: "19rem" }}
      >
          <Card.Img variant="top" src={course.foto} />
          <Card.Body>
              <Card.Title className="mb-4">{course.nome}</Card.Title>
              <Card.Subtitle className="mb-4 text-muted">
                  {course.formaRealizacao}
              </Card.Subtitle>
      </Card.Body>
      </Card>
  </>)});


  return (
    <Container>
      <Row>           
        <h2 className="mb-4 text-muted">
            Cursos Com Inscrições Abertas:
            {renderCoursesInscAbertas}
        </h2>
      </Row>
      <Row>           
        <h2 className="mb-4 text-muted">
            Cursos Em Andamento:
            {renderCoursesAndamento}
        </h2>
      </Row>
      <Row>           
        <h2 className="mb-4 text-muted">
            Cursos Concluídas:
            {renderCoursesConcluidos}
        </h2>
      </Row>

    </Container>
  );
}

export default GovEmployeeMyCourses;
