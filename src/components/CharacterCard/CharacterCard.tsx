import { useState } from "react";
import { CharacterComponent } from "../../../types/character";
import styles from "../../styles/charactercard.module.css";

const CharacterCard = ({ character }: CharacterComponent) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <div className={styles["card"]}>
      <div className={styles["card__inner"]}>
        <div className={styles["card__front"]}>
          <img src={character.image} alt={character.name} />
        </div>
        <div className={styles["card__back"]}>
          <div>
            <h2>{character.name}</h2>
            <p>Status: {character.status}</p>
            <p>Species: {character.species}</p>
            <p>Gender: {character.gender}</p>
            <p>Location: {character.location.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
