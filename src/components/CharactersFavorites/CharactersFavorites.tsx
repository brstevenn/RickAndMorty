import { CharactersResult } from "@tstypes/character";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import { useEffect, useState } from "react";

export const CharactersFavorites = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState("");
  const [characters, setCharacters] = useState<CharactersResult[]>([]);
  const [allCharacters, setAllCharacters] = useState<CharactersResult[]>([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("characters") || "[]");
    if (typeof storedData !== "string" && storedData !== null) {
      setCharacters(storedData);
      setAllCharacters(storedData);
    }
  }, []);

  const quitFav = (id: number) => {
    const updatedItems = characters.filter((item) => item.id !== id);
    localStorage.setItem("characters", JSON.stringify(updatedItems));
    setAllCharacters(updatedItems);
  };

  const filterByName = () => {
    const updatedItems = characters.filter((item) =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
    setAllCharacters(updatedItems);
  };

  return (
    <div>
      <div>
        <label>
          <input
            type="text"
            value={filter}
            placeholder="Filter by name"
            onChange={(e) => setFilter(e.target.value)}
          />
        </label>
        <button onClick={filterByName}>Iniciar sesión</button>
      </div>
      <div>
        {allCharacters.length > 0 ? (
          allCharacters.map((character: CharactersResult) => (
            <>
              <CharacterCard key={character.id} character={character} />
              <button onClick={() => quitFav(character.id)}>Quit</button>
            </>
          ))
        ) : (
          <div>Aun no hay datos</div>
        )}
      </div>
    </div>
  );
};

export default CharactersFavorites;
