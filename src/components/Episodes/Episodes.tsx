import { useQuery } from "@apollo/client";
import { GET_EPISODES } from "../../queries/getEpisodes";
import { EpisodesResult } from "@tstypes/episode";
import EpisodesCard from "../EpisodeCard/EpisodeCard";
import { useState } from "react";

const Episodes = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [name, setName] = useState("");
  const [filter, setFilter] = useState("");
  const { loading, error, data } = useQuery(GET_EPISODES, {
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

  return (
    <div>
      <form onSubmit={filterByName}>
        <label>
          <input
            type="text"
            value={filter}
            placeholder="Filter by name"
            onChange={(e) => setFilter(e.target.value)}
          />
        </label>
        <button type="submit">Iniciar sesión</button>
      </form>
      <div>
        {currentPage > 1 && (
          <button onClick={onPreviousPage}>Previous Page</button>
        )}
        <p>Curren Page: {currentPage}</p>
        {currentPage < data.episodes.info.count / 20 && (
          <button onClick={onNextPage}>Next Page</button>
        )}
        <p>Total Pages: {Math.ceil(data.episodes.info.count / 20)}</p>
      </div>
      <div>
        {data.episodes.results.map((episodes: EpisodesResult) => (
          <EpisodesCard episode={episodes} />
        ))}
      </div>
    </div>
  );
};

export default Episodes;
