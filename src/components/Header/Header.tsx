import image from "../../assets/images/Rick_and_Morty.png";
import styles from "../../styles/header.module.css";

const Header = () => {
  return (
    <div className={styles["header-container"]}>
      <img
        className="m-5"
        src={image}
        alt="Imagen del header con el titulo de rick and morty"
      />
    </div>
  );
};

export default Header;
