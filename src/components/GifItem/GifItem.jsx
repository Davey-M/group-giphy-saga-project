import { useState } from "react";

import { Button } from "@mui/material";

function GifItem({ name, url }) {
  // set favorite state (default to false)
  const [favorite, setFavorite] = useState(false);

  // add gif to favorite database
  const addFavorite = () => {
    console.log("Adding Favorite");
    setFavorite(true);
  };

  // remove gif from favorite database
  const removeFavorite = () => {
    console.log("Removing Favorite");
    setFavorite(false);
  };

  return (
    <li className='gif-card'>
      <h2>{name}</h2>
      <img src={url} alt={name} />
      <div className='favorite-buttons-container'>
        {!favorite ? (
          <Button variant='contained' onClick={addFavorite}>
            Favorite
          </Button>
        ) : (
          <Button variant='outlined' onClick={removeFavorite}>
            Remove Favorite
          </Button>
        )}
      </div>
    </li>
  );
}

export default GifItem;
