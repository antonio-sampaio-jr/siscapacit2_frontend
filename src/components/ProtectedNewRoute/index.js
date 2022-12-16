import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function ProtectedNewRoute({Component,apiURLCourses}) {
  const navigate = useNavigate();

  const loggedInUser = localStorage.getItem("loggedUser");

  const parsedUser = JSON.parse(loggedInUser || '""');

  useEffect(() => {
    console.log(parsedUser);
    if (parsedUser.msg !== "OkGovEmployee") {
      navigate("/");
    }
  }, []);


  return <Component apiURLCourses={apiURLCourses} />;
}