import { EpisodeComponent } from "../../../types/episode";

const EpisodesCard = ({ episode }: EpisodeComponent) => {
  const addFav = () => {
    const storedData = JSON.parse(localStorage.getItem("episodes") || "[]");
    const updatedData = [...storedData, episode];
    localStorage.setItem("episodes", JSON.stringify(updatedData));
  };
  return (
    <div>
      <h2>{episode.name}</h2>
      <p>Episode: {episode.episode}</p>
      <button onClick={addFav}>Add fav</button>
    </div>
  );
};

export default EpisodesCard;
