import GifItem from "../GifItem/GifItem";

const dummyData = [
  {
    id: 1,
    name: "GIF One",
    url: "https://wtwp.com/wp-content/uploads/2015/06/placeholder-image.png",
  },
  {
    id: 2,
    name: "GIF Two",
    url: "https://wtwp.com/wp-content/uploads/2015/06/placeholder-image.png",
  },
  {
    id: 3,
    name: "GIF Three",
    url: "https://wtwp.com/wp-content/uploads/2015/06/placeholder-image.png",
  },
  {
    id: 4,
    name: "GIF Four",
    url: "https://wtwp.com/wp-content/uploads/2015/06/placeholder-image.png",
  },
  {
    id: 5,
    name: "GIF Five",
    url: "https://wtwp.com/wp-content/uploads/2015/06/placeholder-image.png",
  },
  {
    id: 6,
    name: "GIF Six",
    url: "https://wtwp.com/wp-content/uploads/2015/06/placeholder-image.png",
  },
  {
    id: 7,
    name: "GIF Seven",
    url: "https://wtwp.com/wp-content/uploads/2015/06/placeholder-image.png",
  },
];

function GifList() {
  return (
    <>
      <h1>This is the GifList component</h1>
      <ul className='gif-list-container'>
        {dummyData.map((gif) => {
          return <GifItem {...gif} />;
        })}
      </ul>
      ;
    </>
  );
}

export default GifList;
