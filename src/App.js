import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import { useState } from "react";
import Footer from "./components/Footer/Footer";
import ErrorPage from "./pages/ErrorPage";
import GovEmployeeList from "./components/GovEmployee/GovEmployeeList/GovEmployeeList";
import GovEmployeeDetails from "./components/GovEmployee/GovEmployeeDetails/GovEmployeeDetails";
import AddGovEmployee from "./components/GovEmployee/AddGovEmployee/AddGovEmployee";
import EditGovEmployee from "./components/GovEmployee/EditGovEmployee/EditGovEmplyoee";
import CourseList from "./components/Courses/CourseList/CourseList";
import CourseDetails from "./components/Courses/CourseDetails/CourseDetails";
import AddCourse from "./components/Courses/AddCourse/AddCourse";
import EditCourse from "./components/Courses/EditCourse/EditCourse";
import Login from "./components/Autentication/Login";
import Register from "./components/Autentication/Register";
import GovEmployeeCoursesList from "./components/Users/GovEmployeeCoursesList";
import GovEmployeeCourseDetails from "./components/Users/GovEmployeeCourseDetails";

function App() {
  const apiURLCourses = "https://siscapacit2-api.cyclic.app/cursos";
  const apiURL = "https://siscapacit2-api.cyclic.app/servidores";
  const apiURLAdmin = "https://siscapacit2-api.cyclic.app/administradores";

  //retirar a duplicação de navbar no perfil servidor

  const [form, setForm] = useState({
    matricula: "",
    nome: "",
    foto: "",
    orgao: "",
    vinculo: "",
    cargo: "",
    lotacao: "",
    exercicio: "",
    email: "",
    telefone: "",
    celular: "",
    dataAdmissao: "",
    cpf: "",
    dataNascimento: "",
    naturalidade: "",
  });

  const [formCourses, setFormCourses] = useState({
    nome: "",
    idCurso: "",
    formaRealizacao: "",
    foto: "",
    local: "",
    ofertante: "",
    periodoInscricao: "",
    vagas: "",
    periodoRealizacao: "",
    valor: "",
    tipo: "",
    site: "",
    descricao: "",
    criteriosSelecao: "",
    situacao: "",
  });

  return (
    <div className="App bg-light" style={{ height: "100vh" }}>
      <NavigationBar />
      <ToastContainer />
      <Routes>
        <Route
          path="/"
          element={<Login apiURL={apiURL} apiURLAdmin={apiURLAdmin} />}
        />
        <Route path="/register" element={<Register apiURL={apiURL} />} />

        <Route
          path="/listarCursosAluno"
          element={<GovEmployeeCoursesList apiURL={apiURLCourses} />}
        />
        <Route
          path="/listarCursoAluno/:idCurso/6398e1849a7cc8fb4d7f1d33"
          element={<GovEmployeeCourseDetails apiURL={apiURLCourses} />}
        />

        <Route
          path="/listarServidores"
          element={<GovEmployeeList apiURL={apiURL} />}
        />
        <Route
          path="/listarServidor/:id"
          element={<GovEmployeeDetails apiURL={apiURL} />}
        />
        <Route
          path="/cadastrarServidor"
          element={
            <AddGovEmployee apiURL={apiURL} form={form} setForm={setForm} />
          }
        />
        <Route
          path="/editarServidor/:id"
          element={
            <EditGovEmployee apiURL={apiURL} form={form} setForm={setForm} />
          }
        />
        <Route
          path="/listarCursos"
          element={<CourseList apiURLCourses={apiURLCourses} />}
        />
        <Route
          path="/listarCurso/:id"
          element={<CourseDetails apiURLCourses={apiURLCourses} />}
        />
        <Route
          path="/cadastrarCurso"
          element={
            <AddCourse
              apiURLCourses={apiURLCourses}
              formCourses={formCourses}
              setFormCourses={setFormCourses}
            />
          }
        />
        <Route
          path="/editarCurso/:id"
          element={
            <EditCourse
              apiURLCourses={apiURLCourses}
              formCourses={formCourses}
              setFormCourses={setFormCourses}
            />
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
