import { Button, Container } from "react-bootstrap";
// import { Link } from "react-router-dom"

function inscricaoPage() {
  return (
    <Container
      style={{ height: "100vh" }}
      className="d-flex align-items-center justify-content-center"
    >
      <Button className="p-4" variant="btn btn-outline-danger" size="lg">
        Inscrito
      </Button>
    </Container>
  );
}

export default inscricaoPage;
