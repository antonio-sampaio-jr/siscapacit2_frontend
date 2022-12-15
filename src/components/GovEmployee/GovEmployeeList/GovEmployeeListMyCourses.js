import { useEffect, useState } from "react";
import { Button, Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function GovEmployeeListMyCourses({apiURL}) {
  
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

  const renderCourses = allCourses.map((course)=>{
      return(
      <>
      <Col>
        
      
      <Card key={course._id}
      className="mb-3 mt-3 p-2 m-4 bg-light text-dark "
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
      </Col>
  </>)});



  return (
    <Container>
      <Row >
        {
          renderCourses
        }           
      </Row>
    </Container>
  );
}

export default GovEmployeeListMyCourses;
