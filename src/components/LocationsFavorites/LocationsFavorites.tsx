import { useEffect, useState } from "react";
import LocationCard from "../LocationCard/LocationCard";
import { LocationsResult } from "@tstypes/location";

export const LocationsFavorites = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState("");
  const [locations, setCharacters] = useState<LocationsResult[]>([]);
  const [allLocations, setAllLocations] = useState<LocationsResult[]>([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("locations") || "[]");
    if (typeof storedData !== "string" && storedData !== null) {
      setCharacters(storedData);
      setAllLocations(storedData);
    }
  }, [locations]);

  const quitFav = (id: number) => {
    const updatedItems = locations.filter((item) => item.id !== id);
    localStorage.setItem("locations", JSON.stringify(updatedItems));
  };

  const filterByName = () => {
    const updatedItems = locations.filter((item) =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
    setAllLocations(updatedItems);
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
        {allLocations.length > 0 ? (
          allLocations.map((location: LocationsResult) => (
            <>
              <LocationCard key={location.id} location={location} />
              <button onClick={() => quitFav(location.id)}>Quit</button>
            </>
          ))
        ) : (
          <div>Aun no hay datos</div>
        )}
      </div>
    </div>
  );
};

export default LocationsFavorites;
