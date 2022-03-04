import GifItem from "../GifItem/GifItem";

function Favorites() {
  return (
    <>
      <h1>Favorites View</h1>
      <div className='gif-list-container'>
        {dummyData.map(({ id, name, img_url, img_id, category_id }) => {
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
