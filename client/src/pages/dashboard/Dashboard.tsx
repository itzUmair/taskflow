import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const user = localStorage.getItem("user-token");
    if (!user) {
      navigate("/login");
    }
  });
  return <div>Dashboard</div>;
};

export default Dashboard;
