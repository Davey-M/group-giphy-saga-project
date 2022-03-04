import { useState } from "react";

import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import { Select, MenuItem, Paper, FormControl } from "@mui/material";
import { useDispatch } from "react-redux";

function GifItem({ name, img_url, img_id, fav = false, cat = 4 }) {
  const dispatch = useDispatch();

  // set favorite state (default to false)
  const [favorite, setFavorite] = useState(fav);
  const [category, setCategory] = useState(cat);

  // add gif to favorite database
  const addFavorite = () => {
    console.log("Adding Favorite");
    const postOptions = {
      name,
      img_url,
      img_id,
      category_id: cat,
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

  const changeCategory = (e) => {
    setCategory(e.target.value);
    dispatch({
      type: "UPDATE_CATEGORY",
      payload: {
        img_id,
        category_id: e.target.value,
      },
    });
  };

  return (
    <div className='gif-card'>
      <a href={img_url} target='_blank'>
        <img src={img_url} alt={name} />
        {favorite && (
          <Paper className='category'>
            <Select value={category} onChange={changeCategory}>
              <MenuItem value={1}>Funny</MenuItem>
              <MenuItem value={2}>Cohort</MenuItem>
              <MenuItem value={3}>Cartoon</MenuItem>
              <MenuItem value={4}>NSFW</MenuItem>
              <MenuItem value={5}>Meme</MenuItem>
            </Select>
          </Paper>
        )}
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
