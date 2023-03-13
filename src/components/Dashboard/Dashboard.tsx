import { useEffect, useState } from "react";
import Characters from "../Characters/Characters";
import { Link, Navigate } from "react-router-dom";
import Logout from "../Logout/Logout";
import { auth } from "src/auth";
import Navbar from "../Navbar/Navbar";
import styles from "../../styles/dashboard.module.css";
import Headline from "../Headline/Headline";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user === null) {
        setIsLoggedIn(false);
      } else if (user !== null && isLoggedIn === false) {
        setIsLoggedIn(true);
      }
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Logout />
      <Headline />
      <Navbar type={"Dash"} />
    </>
  );
};

export default Dashboard;
