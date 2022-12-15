import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function ProtectedAdminNewRoute3({Component,apiURLCourses,formCourses,setFormCourses}) {
  
  const navigate = useNavigate();

  const loggedInUser = localStorage.getItem("loggedUser");

  const parsedUser = JSON.parse(loggedInUser || '""');

  useEffect(() => {
    if (parsedUser.msg !== "OkAdmin") {
      navigate("/");
    }
  }, []);

  return <Component apiURLCourses={apiURLCourses} formCourses={formCourses} setFormCourses={setFormCourses}/>;
}