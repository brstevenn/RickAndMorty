import { useState } from "react";
import Characters from "../Characters/Characters";
import { NavbarComponent } from "@tstypes/navbar";
import Episodes from "../Episodes/Episodes";
import Locations from "../Locations/Locations";
import CharactersFavorites from "../CharactersFavorites/CharactersFavorites";
import EpisodesFavorites from "../EpisodesFavorites/EpisodesFavorites";
import LocationsFavorites from "../LocationsFavorites/LocationsFavorites";
import styles from "../../styles/navbar.module.css";

const Navbar = ({ type }: NavbarComponent) => {
  const [dashSelected, setDashSelected] = useState("characters");
  const [favSelected, seFavSelected] = useState("characters");

  const changeDash = (data: string) => {
    setDashSelected(data);
  };

  const changeFav = (data: string) => {
    seFavSelected(data);
  };

  if (type === "Fav") {
    return (
      <>
        <div className={styles["navbar-container"]}>
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <ul className="nav nav-tabs">
                <li
                  className={`nav-link ${
                    dashSelected === "characters" ? "active" : ""
                  }`}
                  onClick={(event) => changeFav("characters")}
                >
                  Characters
                </li>
                <li
                  className={`nav-link ${
                    dashSelected === "episodes" ? "active" : ""
                  }`}
                  onClick={(event) => changeFav("episodes")}
                >
                  Episodes
                </li>
                <li
                  className={`nav-link ${
                    dashSelected === "locations" ? "active" : ""
                  }`}
                  onClick={(event) => changeFav("locations")}
                >
                  Lopcations
                </li>
              </ul>
            </div>
          </nav>
        </div>
        {favSelected === "episodes" ? (
          <EpisodesFavorites />
        ) : favSelected === "locations" ? (
          <LocationsFavorites />
        ) : (
          <CharactersFavorites />
        )}
      </>
    );
  }
  return (
    <>
      <div className="d-flex justify-content-center bg-body-tertiary">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <ul className="navbar-nav">
              <li
                className={`nav-link fs-3 ${
                  dashSelected === "characters" ? "active" : ""
                }`}
                onClick={(event) => changeDash("characters")}
              >
                Characters
              </li>
              <li
                className={`nav-link fs-3 ${
                  dashSelected === "episodes" ? "active" : ""
                }`}
                onClick={(event) => changeDash("episodes")}
              >
                Episodes
              </li>
              <li
                className={`nav-link fs-3 ${
                  dashSelected === "locations" ? "active" : ""
                }`}
                onClick={(event) => changeDash("locations")}
              >
                Locations
              </li>
            </ul>
          </div>
        </nav>
      </div>
      {dashSelected === "episodes" ? (
        <Episodes />
      ) : dashSelected === "locations" ? (
        <Locations />
      ) : (
        <Characters />
      )}
    </>
  );
};

export default Navbar;
