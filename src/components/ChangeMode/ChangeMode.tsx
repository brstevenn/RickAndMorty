import { useEffect, useState } from "react";
import styles from "../../styles/changemode.module.css";

const ChangeMode = () => {
  const [checked, setChecked] = useState(false);

  const changeMode = () => {
    const storedData = JSON.parse(localStorage.getItem("darckMode") || "false");
    localStorage.setItem("darckMode", JSON.stringify(!storedData));
    const body = document.getElementsByTagName("body");
    if (!storedData) {
      body[0].id = "body-darck-off";
      setChecked(false);
    }
    if (storedData) {
      body[0].id = "body-darck-on";
      setChecked(true);
    }
  };

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("darckMode") || "false");
    const body = document.getElementsByTagName("body");
    if (storedData) {
      body[0].id = "body-darck-off";
      localStorage.setItem("darckMode", JSON.stringify(false));
      setChecked(false);
    }
    if (!storedData) {
      body[0].id = "body-darck-on";
      localStorage.setItem("darckMode", JSON.stringify(true));
      setChecked(true);
    }
  }, []);

  return (
    <>
      <div className="position-relative">
        <div
          onClick={changeMode}
          className="position-absolute top-0 start-0 w-25 m-1"
        >
          {checked ? (
            <span
              className="material-symbols-outlined"
              id={styles["material-symbols-outlined"]}
            >
              toggle_on
            </span>
          ) : (
            <span
              className="material-symbols-outlined"
              id={styles["material-symbols-outlined"]}
            >
              toggle_off
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default ChangeMode;
