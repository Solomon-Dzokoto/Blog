import { Outlet, useNavigate } from "react-router-dom";
// import Redirect from "../Pages/Redirect";
import { useUserStore } from "../store/useUserStore";
import { useEffect } from "react";

const RequiredUser = () => {
  const user = useUserStore((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || user === null) {
      console.log("user not found");
      navigate("/signin");
    }
    navigate("/home");
  }, [user, navigate]);

  return <Outlet />;
};

export default RequiredUser;
