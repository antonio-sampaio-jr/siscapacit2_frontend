import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function ProtectedAdminRoute({Component},{apiURL}) {
  
  const navigate = useNavigate();

  const loggedInUser = localStorage.getItem("loggedUser");

  const parsedUser = JSON.parse(loggedInUser || '""');

  console.log("=>"+parsedUser);
  console.log(apiURL);
  useEffect(() => {
    console.log(parsedUser);
    if (parsedUser.msg !== "OkAdmin") {
      navigate("/");
    }
  }, []);

  return <Component />;
}