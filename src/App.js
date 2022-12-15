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
import GovEmployeeCourseDetails from "./components/Users/GovEmployeeCourseDetails";
import "react-toastify/dist/ReactToastify.css";
import GovEmployeeCoursesList from "./components/Users/GovEmployeeCoursesList";
import GovEmployeeMyCourses from "./components/Users/GovEmployeeMyCourses";
import { AuthContext, AuthContextComponent } from "./contexts/authContext";
import GovEmployeeListMyCourses from "./components/GovEmployee/GovEmployeeList/GovEmployeeListMyCourses";
import { ProtectedAdminRoute } from "./components/ProtectedAdminRoute";
import { ProtectedRoute } from "./components/ProtectedRoute";

function App() {
  
  const apiURLCourses = "https://siscapacit2-api.cyclic.app/cursos";
  const apiURL = "https://siscapacit2-api.cyclic.app/servidores";
  const apiURLAdmin = "https://siscapacit2-api.cyclic.app/administradores";
  //comentário

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
      <AuthContextComponent>
      <ToastContainer />
      <NavigationBar />
      <Routes>
        {/* Rotas Abertas */}
        <Route path="/" element={<Login apiURL={apiURL} apiURLAdmin={apiURLAdmin}/>} />
        <Route path="/register" element={<Register apiURL={apiURL}/>} />

        {/* Rotas do Servidor Público Autenticado */}
        <Route path="/listarCursosAluno" element={<ProtectedRoute Component={GovEmployeeCoursesList} apiURLCourses={apiURLCourses}/>} />
        <Route path="/listarCursoAluno/:idCurso/:idGovEmployee" element={<ProtectedRoute Component={GovEmployeeCourseDetails} apiURL={apiURL} apiURLCourses={apiURLCourses}/>} />
        <Route path="/listarCursoAreaAluno/:idGovEmployee" element={<ProtectedRoute Component={GovEmployeeMyCourses} apiURL={apiURL}/>} />
        
        {/* Rotas do Administrador Autenticado */}
        <Route
          path="/listarServidores"
          element={<ProtectedAdminRoute Component={GovEmployeeList} apiURL={apiURL} />} />
     
        <Route
          path="/listarCursosServidor/:idGovEmployee"
          element={<ProtectedAdminRoute Component={GovEmployeeListMyCourses} apiURL={apiURL} />}
        />
        <Route
          path="/listarServidor/:id"
          element={<ProtectedAdminRoute Component={GovEmployeeDetails} apiURL={apiURL} />}
        />
        <Route
          path="/cadastrarServidor"
          element={<ProtectedAdminRoute Component={AddGovEmployee} apiURL={apiURL} form={form} setForm={setForm} />
          }
        />
        <Route
          path="/editarServidor/:id"
          element={
            <ProtectedAdminRoute Component={EditGovEmployee} apiURL={apiURL} form={form} setForm={setForm} />
          }
        />
        <Route
          path="/listarCursos"
          element={<ProtectedAdminRoute Component={CourseList} apiURLCourses={apiURLCourses} />}
        />
        <Route
          path="/listarCurso/:id"
          element={<ProtectedAdminRoute Component={CourseDetails} apiURLCourses={apiURLCourses} />}
        />
        <Route
          path="/cadastrarCurso"
          element={
            <ProtectedAdminRoute Component={AddCourse}
              apiURLCourses={apiURLCourses}
              formCourses={formCourses}
              setFormCourses={setFormCourses}
            />
          }
        />
        <Route
          path="/editarCurso/:id"
          element={
            <ProtectedAdminRoute Component={EditCourse}
              apiURLCourses={apiURLCourses}
              formCourses={formCourses}
              setFormCourses={setFormCourses}
            />
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
      </AuthContextComponent>
    </div>
  );
}

export default App;
