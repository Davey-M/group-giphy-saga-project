import { useState } from "react";

import { Button } from "@mui/material";

import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";

function GifItem({ name, img_url, fav = false }) {
  // set favorite state (default to false)
  const [favorite, setFavorite] = useState(fav);

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
      <img src={img_url} alt={name} />
      <div className='favorite-overlay'>
        {!favorite && (
          <StarBorderIcon onClick={addFavorite} fontSize='medium' />
        )}
        {favorite && <StarIcon onClick={removeFavorite} fontSize='medium' />}
      </div>
      <div className='name-overlay'>
        <h2>{name}</h2>
      </div>
    </div>
  );
}

export default GifItem;
