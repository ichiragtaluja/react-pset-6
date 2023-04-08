import { useEffect, useState } from "react";
import { fakeFetch1 } from "./fakeFetch1";

export function VideoDetail() {
  const [videoDetail, setVideoDetail] = useState({});
  const [displayDetail, setDisplayDetail] = useState({});
  const [isShowLabel, setIsShowLabel] = useState(false);

  const getVideoDetail = async () => {
    try {
      const response = await fakeFetch1("https://example.com/api/getvideo");
      if (response.status === 200) {
        setVideoDetail(response.data.videos);
        setDisplayDetail(response.data.videos);
      }
    } catch (error) {}
  };

  const buttonHandler = () => {
    setIsShowLabel(!isShowLabel);
    if (!isShowLabel) {
      setDisplayDetail({ ...videoDetail, labels: "Self Motivational" });
    } else {
      setDisplayDetail(videoDetail);
    }
  };

  useEffect(() => {
    getVideoDetail();
  }, []);
  return (
    <>
      <h1>Question 9</h1>
      <h3>{displayDetail.title}</h3>
      <p>
        <b>Views: </b>
        {displayDetail.views}
      </p>
      <p>
        <b>Likes: </b>
        {displayDetail.likes}
      </p>
      {isShowLabel && (
        <p>
          <b>Labels: </b>
          {displayDetail.labels}
        </p>
      )}
      <button onClick={buttonHandler}>
        {!isShowLabel ? "Show Label" : "Hide Label"}
      </button>
    </>
  );
}
