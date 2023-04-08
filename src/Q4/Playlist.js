import { useEffect, useState } from "react";
import { fakeFetch1 } from "./fakeFetch1";

export function Playlist() {
  const [videosData, setVideosData] = useState([]);

  const getVideosData = async () => {
    try {
      const response = await fakeFetch1("https://example.com/api/videos");
      if (response.status === 200) {
        setVideosData(response.data.videos);
      }
    } catch (error) {}
  };

  const clickHandler = () => {
    const filteredList = [...videosData];
    filteredList.shift();
    setVideosData(filteredList);
  };

  useEffect(() => {
    getVideosData();
  }, []);
  return (
    <>
      <h1>Question 4</h1>
      <button onClick={clickHandler}>Delete video</button>
      {videosData.map(({ title, thumbnail, views, likes }) => (
        <div>
          <img src={thumbnail} />
          <h3>{title}</h3>
          <p>Likes: {likes}</p>
          <p>Views: {views}</p>
          <br />
        </div>
      ))}
    </>
  );
}
