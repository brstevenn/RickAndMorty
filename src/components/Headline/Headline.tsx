import Logout from "../Logout/Logout";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../auth";
import styles from "../../styles/headline.module.css";

function Headline() {
  return (
    <div className={styles["headline-container"]}>
      <Link to={"/favorites"}>
        <span
          className="material-symbols-outlined  position-absolute top-0 end-0 w-25 m-1"
          id={styles["material-symbols-outlined-favorite"]}
        >
          favorite
        </span>
      </Link>
    </div>
  );
}

export default Headline;
