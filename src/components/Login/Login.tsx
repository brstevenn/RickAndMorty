import SessionContext from "../SessionContext/SessionContext";
import {
  browserSessionPersistence,
  setPersistence,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useContext, useState } from "react";
import { auth, googleProvider } from "../../auth";
import google from "../../assets/icons/Google.png";
import styles from "../../styles/login.module.css";

function Login() {
  const { setIsLoggedIn } = useContext(SessionContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    setPersistence(auth, browserSessionPersistence)
      .then(async () => {
        const result = await signInWithEmailAndPassword(auth, email, password);
        const user = result.user;
        setIsLoggedIn(true);
        console.log("Inicio de sesión exitoso:", user);
      })
      .catch((error) => {
        // Handle Errors here.
      });
  };

  const handleGoogleLogin = async () => {
    try {
      setPersistence(auth, browserSessionPersistence)
        .then(async () => {
          const result = await signInWithPopup(auth, googleProvider);
          const user = result.user;
          console.log("Inicio de sesión exitoso:", user);
        })
        .catch((error) => {
          // Handle Errors here.
        });
    } catch (error) {
      console.log("Error al iniciar sesión con Google:", error);
    }
  };

  return (
    <div className="m-1">
      <form>
        <div className="mb-3">
          <input
            placeholder="Enter mail"
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <input
            placeholder="Enter password"
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </form>
      <div className="mb-3 row text-center">
        <button
          type="submit"
          onClick={handleSubmit}
          className="btn btn-primary col"
        >
          Submit
        </button>
        <button
          className="col"
          id={styles["button-google"]}
          onClick={handleGoogleLogin}
        >
          <img
            className={styles["google-login"]}
            src={google}
            alt="Icon google login"
          />
        </button>
      </div>
    </div>
  );
}

export default Login;
