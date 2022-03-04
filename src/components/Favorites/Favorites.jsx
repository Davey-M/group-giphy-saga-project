import GifItem from "../GifItem/GifItem";
import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react';

function Favorites() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "GET_FAVORITES"});
  }, []);

  const favGifList = useSelector((store) => store.gifFav);

  console.log(favGifList);

  return (
    <>
      <h1>Favorites View</h1>
      <div className='gif-list-container'>
        {favGifList.map(({ id, name, img_url, img_id, category_id }) => {
          return (
            <GifItem
              key={id}
              name={name}
              img_id={img_id}
              img_url={img_url}
              fav={true}
              cat={category_id}
            />
          );
        })}
      </div>
    </>
  );
}

export default Favorites;
