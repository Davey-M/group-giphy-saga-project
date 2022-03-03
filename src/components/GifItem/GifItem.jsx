import { useState } from "react";

import { Button } from "@mui/material";

import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";

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
    <div className='gif-card'>
      <img src={url} alt={name} />
      <div className='favorite-overlay'>
        {!favorite && (
          <StarBorderIcon onClick={addFavorite} fontSize='medium' />
        )}
        {favorite && <StarIcon onClick={removeFavorite} fontSize='medium' />}
      </div>
      <div className='name-overlay'>
        <h2>{name}</h2>
        <div className='favorite-buttons-container'>
          {/* {!favorite ? (
            <Button variant='contained' onClick={addFavorite}>
              Favorite
            </Button>
          ) : (
            <Button variant='outlined' onClick={removeFavorite}>
              Remove Favorite
            </Button>
          )} */}
        </div>
      </div>
    </div>
  );
}

export default GifItem;
