import { useEffect, useState } from "react";
import { EpisodesResult } from "@tstypes/episode";
import EpisodesCard from "../EpisodeCard/EpisodeCard";

export const EpisodesFavorites = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [episodes, setCharacters] = useState<EpisodesResult[]>([]);
  const [filter, setFilter] = useState("");
  const [allEpisodes, setAllEpisodes] = useState<EpisodesResult[]>([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("episodes") || "[]");
    if (typeof storedData !== "string" && storedData !== null) {
      setCharacters(storedData);
      setAllEpisodes(storedData);
    }
  }, [episodes]);

  const quitFav = (id: number) => {
    const updatedItems = episodes.filter((item) => item.id !== id);
    localStorage.setItem("episodes", JSON.stringify(updatedItems));
    setAllEpisodes(updatedItems);
  };

  const filterByName = () => {
    const updatedItems = episodes.filter((item) =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
    setAllEpisodes(updatedItems);
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
        {allEpisodes.length > 0 ? (
          allEpisodes.map((episode: EpisodesResult) => (
            <>
              <EpisodesCard key={episode.id} episode={episode} />
              <button onClick={() => quitFav(episode.id)}>Quit</button>
            </>
          ))
        ) : (
          <div>Aun no hay datos</div>
        )}
      </div>
    </div>
  );
};

export default EpisodesFavorites;
