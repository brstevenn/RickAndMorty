import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "../../queries/getCharacters";
import { CharactersResult } from "@tstypes/character";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import { useState } from "react";
import styles from "../../styles/characters.module.css";

export const Characters = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [name, setName] = useState("");
  const [filter, setFilter] = useState("");
  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: { page: currentPage, filter: name },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const onNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const onPreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const filterByName = () => {
    setName(filter);
  };

  const addFav = (characters: CharactersResult) => {
    const storedData = JSON.parse(localStorage.getItem("characters") || "[]");
    const updatedData = [...storedData, characters];
    localStorage.setItem("characters", JSON.stringify(updatedData));
  };

  return (
    <div>
      <div>
        <nav className="navbar bg-secondary">
          <div className="container-fluid">
            <a className="navbar-brand">Character</a>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                value={filter}
                placeholder="Filter by name"
                aria-label="Search"
                onChange={(e) => setFilter(e.target.value)}
              />
              <button
                onClick={filterByName}
                className="btn btn-outline-success"
                type="submit"
              >
                Filter
              </button>
            </form>
          </div>
        </nav>
      </div>
      <div>
        <nav aria-label="...">
          <ul className="pagination">
            <li
              className={`page-item 
                ${currentPage <= 1 ? "disabled" : ""}`}
            >
              <span onClick={onPreviousPage} className="page-link">
                Previous
              </span>
            </li>
            <li className="page-item">
              <a
                onClick={() =>
                  setCurrentPage(
                    currentPage > 1
                      ? currentPage >=
                        Math.ceil(data.characters.info.count / 20)
                        ? 40
                        : currentPage - 1
                      : currentPage
                  )
                }
                className={`page-link ${currentPage === 1 ? "active" : ""}`}
                href="#"
              >
                {currentPage > 1
                  ? currentPage >= Math.ceil(data.characters.info.count / 20)
                    ? 40
                    : currentPage - 1
                  : currentPage}
              </a>
            </li>
            <li
              className={`page-item ${
                currentPage >= 2 &&
                currentPage < Math.ceil(data.characters.info.count / 20)
                  ? "active"
                  : ""
              }`}
              aria-current="page"
            >
              <span
                onClick={() =>
                  setCurrentPage(
                    currentPage === 1
                      ? 2
                      : currentPage ===
                        Math.ceil(data.characters.info.count / 20)
                      ? Math.ceil(data.characters.info.count / 20) - 1
                      : currentPage
                  )
                }
                className="page-link"
              >
                {currentPage === 1
                  ? 2
                  : currentPage === Math.ceil(data.characters.info.count / 20)
                  ? Math.ceil(data.characters.info.count / 20) - 1
                  : currentPage}
              </span>
            </li>
            <li
              className={`page-item 
                ${
                  currentPage === Math.ceil(data.characters.info.count / 20)
                    ? "active"
                    : ""
                }`}
            >
              <a
                onClick={() =>
                  setCurrentPage(
                    currentPage === 1
                      ? currentPage + 2
                      : currentPage >=
                        Math.ceil(data.characters.info.count / 20)
                      ? 42
                      : currentPage + 1
                  )
                }
                className="page-link"
                href="#"
              >
                {currentPage === 1
                  ? currentPage + 2
                  : currentPage < Math.ceil(data.characters.info.count / 20)
                  ? currentPage + 1
                  : currentPage}
              </a>
            </li>
            <li
              className={`page-item ${
                currentPage >= Math.ceil(data.characters.info.count / 20)
                  ? "disabled"
                  : ""
              }`}
            >
              <a onClick={onNextPage} className="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles["characters-container"]}>
        {data.characters.results.map((characters: CharactersResult) => (
          <div className={styles["character-container"]}>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={(event) => addFav(characters)}
            >
              Add favorite
            </button>
            <CharacterCard key={characters.id} character={characters} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Characters;
