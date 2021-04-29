import { useState } from "react";
import Controls from "./components/Controls";
import Favorites from "./components/Favorites";
import Player from "./components/Player";
import "./styles.css";

export default function App() {
  const [favoriteRadios, setFavoriteRadios] = useState([
    "My initial Radio",
    "another cool Radio",
    "Top 40",
    "France Inter"
  ]);

  const [valueRadio, setValueRadio] = useState("radio url");

  const handleAddToFavorites = (url) => {
    console.log("adding " + url);
    setFavoriteRadios([...favoriteRadios, url]);
  };

  const handleDeleteFavorite = (url) => {
    console.log("deleting " + url);
    setFavoriteRadios(favoriteRadios.filter((radio) => radio !== url));
  };

  const handlePlayRadio = (url) => {
    setValueRadio(url);
  };

  return (
    <div className="App">
      <h1 className="matter-primary-text">My radio app</h1>
      <h2 className="matter-secondary-text">My Favorite radios:</h2>
      <Favorites
        favoriteRadios={favoriteRadios}
        handleDeleteFavorite={handleDeleteFavorite}
      />
      <hr />
      <h2 className="matter-secondary-text">List of radios</h2>
      <Controls
        favoriteRadios={favoriteRadios}
        handleAddToFavorites={handleAddToFavorites}
        handleDeleteFavorite={handleDeleteFavorite}
        handlePlayRadio={handlePlayRadio}
      />
      <hr />
      <h2 className="matter-secondary-text">Player</h2>
      <Player
        valueRadio={valueRadio}
        favoriteRadios={favoriteRadios}
        handleDeleteFavorite={handleDeleteFavorite}
        handleAddToFavorites={handleAddToFavorites}
      />
    </div>
  );
}
