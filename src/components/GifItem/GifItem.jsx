import { useState } from "react";

import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import { useDispatch } from "react-redux";

function GifItem({ name, img_url, img_id, fav = false }) {
  const dispatch = useDispatch();

  // set favorite state (default to false)
  const [favorite, setFavorite] = useState(fav);

  const category_id = 4;

  // add gif to favorite database
  const addFavorite = () => {
    console.log("Adding Favorite");
    const postOptions = {
      name,
      img_url,
      img_id,
      category_id,
    };
    dispatch({ type: "POST_GIF", payload: postOptions });
    setFavorite(true);
  };

  // remove gif from favorite database
  const removeFavorite = () => {
    console.log("Removing Favorite");

    const deleteOptions = {
      img_id,
    };
    dispatch({ type: "DELETE_FAVE", payload: deleteOptions });

    setFavorite(false);
  };

  return (
    <div className='gif-card'>
      <a href={img_url} target='_blank'>
        <img src={img_url} alt={name} />
      </a>
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
