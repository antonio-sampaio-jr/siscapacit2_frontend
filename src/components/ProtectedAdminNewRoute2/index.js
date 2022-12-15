import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function ProtectedAdminNewRoute2({Component,apiURL,form,setForm}) {
  
  const navigate = useNavigate();

  const loggedInUser = localStorage.getItem("loggedUser");

  const parsedUser = JSON.parse(loggedInUser || '""');

  useEffect(() => {
    if (parsedUser.msg !== "OkAdmin") {
      navigate("/");
    }
  }, []);

  return <Component apiURL={apiURL} form={form} setForm={setForm}/>;
}