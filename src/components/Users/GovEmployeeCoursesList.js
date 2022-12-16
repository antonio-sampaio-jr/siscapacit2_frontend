import { useEffect, useState } from 'react';
import { Container, Row, Card, Button, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";

function GovEmployeeCoursesList({apiURLCourses}) {

    const[courses,setCourses] = useState([]); 
    const [isLoading, setIsLoading] = useState(true);
    const idGovEmployee = "6398e1849a7cc8fb4d7f1d33";

    useEffect(() => {
        try {
            const fetchCourses = async () => {   
            const response = await axios.get(apiURLCourses+"/listarCursos")
            setCourses(response.data)
            setIsLoading(false)
        }

            fetchCourses();
        } catch (error) {
            console.log(error)
        }
    }, []);

    const renderCourses = courses.map((course)=>{
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
            <Button variant="outline-primary">
                <Link className="saibamais"
                    to={`/listarCursoAluno/${course._id}/${idGovEmployee}`} //incluir o id do Aluno
                    style={{ textDecoration: "none" }}
                >
                Saiba mais
                </Link>
            </Button>
        </Card.Body>
        </Card>
    </>)});

    return (
        <div>
            <Container>
                <Row>
                    <Link  className="btn btn-lg m-1"
                        role="button"
                        to={`/listarCursoAreaAluno/${idGovEmployee}`} style={{ textDecoration: "none" }}>
                    Área do Aluno</Link>
                </Row>
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
                        Confira os nossos cursos:
                    </h2>
                </Row>
                <Row>
                    {isLoading && <Spinner animation="border" />} 
                    {renderCourses}
                </Row>
            </Container>
        </div>
    );
}

export default GovEmployeeCoursesList;