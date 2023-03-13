import { useNavigate } from "react-router-dom";
import { auth } from "../../auth";
import styles from "../../styles/logout.module.css";

function Logout() {
  const navigate = useNavigate();
  const signOut = () => {
    auth
      .signOut()
      .then(() => {
        // Aquí puedes hacer algo después de hacer logout
        navigate("/");
        console.log("Usuario deslogueado");
      })
      .catch((error) => {
        // Aquí puedes manejar el error
        console.error("Error al hacer logout:", error);
      });
  };

  return (
    <span
      onClick={signOut}
      className="material-symbols-outlined position-absolute top-0 end-0 w-25 m-1"
      id={styles["material-symbols-outlined"]}
    >
      logout
    </span>
  );
}

export default Logout;
