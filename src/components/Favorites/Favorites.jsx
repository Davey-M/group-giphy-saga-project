import GifItem from "../GifItem/GifItem";

const dummyData = [
  {
    id: 31,
    name: "thor GIF",
    img_url:
      "https://media3.giphy.com/media/ziLadIVnOGCKk/200.gif?cid=7cc233c27yduyphttm51aeb9jfyzy3cbdxg11lzy0stftvh1&rid=200.gif&ct=g",
    img_id: "ziLadIVnOGCKk",
    category_id: 4,
  },
  {
    id: 32,
    name: "Tom Hiddleston Marvel GIF by Nerdist.com",
    img_url:
      "https://media1.giphy.com/media/yn2RkRiOE6WxslzQiC/200.gif?cid=7cc233c27yduyphttm51aeb9jfyzy3cbdxg11lzy0stftvh1&rid=200.gif&ct=g",
    img_id: "yn2RkRiOE6WxslzQiC",
    category_id: 4,
  },
  {
    id: 33,
    name: "the lion king nba GIF",
    img_url:
      "https://media3.giphy.com/media/RD6xYydS43msU/200.gif?cid=7cc233c2bldp81csejf8w2v5v2zi6zsetuqt7pjnrygim3b4&rid=200.gif&ct=g",
    img_id: "RD6xYydS43msU",
    category_id: 4,
  },
];

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
