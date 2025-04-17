import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../store/useUserStore";
import Main from "./Main";

const UserHome = () => {
  const user = useUserStore((state) => state.user);
  const navigate = useNavigate();

  // Redirect to login if no user found
  useEffect(() => {
    if (!user) {
      navigate("/signin");
    }
  }, [user, navigate]);

  return <Main />;
};

export default UserHome;
