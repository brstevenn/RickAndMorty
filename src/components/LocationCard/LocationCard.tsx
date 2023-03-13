import { useQuery } from "@apollo/client";
import { GET_LOCATIONS } from "../../queries/getLocations";
import { LocationComponent } from "@tstypes/location";

const LocationCard = ({ location }: LocationComponent) => {
  const addFav = () => {
    const storedData = JSON.parse(localStorage.getItem("locations") || "[]");
    const updatedData = [...storedData, location];
    localStorage.setItem("locations", JSON.stringify(updatedData));
  };
  return (
    <div>
      <h2>{location.name}</h2>
      <p>Type: {location.type}</p>
      <p>Dimension: {location.dimension}</p>
      <button onClick={addFav}>Add fav</button>
    </div>
  );
};

export default LocationCard;
