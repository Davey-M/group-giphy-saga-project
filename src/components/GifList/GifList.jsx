import GifItem from "../GifItem/GifItem";

import "./GifList.css";

import { useSelector } from "react-redux";

const dummyData = [
  {
    id: 1,
    name: "GIF One",
    img_url:
      "https://wtwp.com/wp-content/uploads/2015/06/placeholder-image.png",
    fav: true,
  },
  {
    id: 2,
    name: "GIF Two",
    img_url:
      "https://wtwp.com/wp-content/uploads/2015/06/placeholder-image.png",
  },
  {
    id: 3,
    name: "GIF Three",
    img_url:
      "https://wtwp.com/wp-content/uploads/2015/06/placeholder-image.png",
  },
  {
    id: 4,
    name: "GIF Four",
    img_url:
      "https://wtwp.com/wp-content/uploads/2015/06/placeholder-image.png",
  },
  {
    id: 5,
    name: "GIF Five",
    img_url:
      "https://wtwp.com/wp-content/uploads/2015/06/placeholder-image.png",
  },
  {
    id: 6,
    name: "GIF Six",
    img_url:
      "https://wtwp.com/wp-content/uploads/2015/06/placeholder-image.png",
  },
  {
    id: 7,
    name: "GIF Seven",
    img_url:
      "https://wtwp.com/wp-content/uploads/2015/06/placeholder-image.png",
  },
];

function GifList() {
  const gifList = useSelector((store) => store.gifList);

  return (
    <>
      <h1>This is the GifList component</h1>
      <div className='gif-list-container'>
        {gifList.data &&
          gifList.data.map((gif, index) => {
            // console.log(gif);
            const name = gif.title;
            const img_url = gif.images.fixed_height.url;
            return <GifItem key={index} name={name} img_url={img_url} />;
          })}
      </div>
    </>
  );
}

export default GifList;
