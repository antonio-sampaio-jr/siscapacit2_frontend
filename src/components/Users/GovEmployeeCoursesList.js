import { useEffect, useState } from 'react';
import { Container, Row, Card, Button, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

function GovEmployeeCoursesListTeste({apiURLCourses}) {

    const[courses,setCourses] = useState([]); 
    const [isLoading, setIsLoading] = useState(true);
    const idServidor = "6398e1849a7cc8fb4d7f1d33";

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

    /*
    const renderCourses = courses.map((course)=>{
        return(
        <Col key={course._id}>
            <div className="card">
                <img src={course.foto} alt=""/>
                <h3>{course.nome}</h3> 
                <p>Price: {course.descricao}</p>
            </div>
        </Col>);
    }); */
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
                    to={`/listarCursoAluno/${course._id}/${idServidor}`} //incluir o id do Aluno
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
                    {isLoading && <Spinner animation="border" />} 
                    {renderCourses}
                </Row>
            </Container>
        </div>
    );
}

export default GovEmployeeCoursesListTeste;