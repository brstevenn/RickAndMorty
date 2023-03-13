import { useEffect, useState } from "react";
import Login from "../Login/Login";
import { auth } from "src/auth";
import { useNavigate } from "react-router-dom";
import "../../styles/global.module.css";
import Header from "../Header/Header";

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user !== null && isLoggedIn === false) setIsLoggedIn(true);
      if (!user === null && isLoggedIn === true) setIsLoggedIn(false);
    });
  }, []);

  if (isLoggedIn === true) navigate("/dashboard");

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-7 m-5">
          <p className="fw-bolder">
            Explore the Rick and Morty universe with this amazing app! Access
            all the episodes, chapters and locations of the series, filter by
            names and add or remove data from your personalized list. list.
            Plus, you'll be able to log in and log out easily. Don't miss this
            intergalactic adventure!
          </p>
        </div>
        <div className="col-3">
          <Login />
        </div>
      </div>
    </div>
  );
};

export default Home;
