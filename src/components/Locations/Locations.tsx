import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "../../queries/getCharacters";
import { CharactersResult } from "@tstypes/character";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import { useState } from "react";
import { GET_LOCATIONS } from "../../queries/getLocations";
import LocationCard from "../LocationCard/LocationCard";
import { LocationsResult } from "@tstypes/location";

export const Locations = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { loading, error, data } = useQuery(GET_LOCATIONS, {
    variables: { page: currentPage },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const onNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const onPreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <div>
      <div>
        {currentPage > 1 && (
          <button onClick={onPreviousPage}>Previous Page</button>
        )}
        <p>Curren Page: {currentPage}</p>
        <button onClick={onNextPage}>Next Page</button>
        <p>Total Pages: {Math.ceil(data.locations.info.count / 20)}</p>
      </div>
      {data.locations.results.map((location: LocationsResult) => (
        <LocationCard key={location.id} location={location} />
      ))}
    </div>
  );
};

export default Locations;
