import { useEffect, useState } from "react";
import { fakeFetch1 } from "./fakeFetch1";

export function SocialMediaPosts() {
  const [socialMediaPosts, setSocialMediaPosts] = useState([]);
  const [displayPosts, setDisplayPosts] = useState([]);
  const [isBakery, setIsBakery] = useState(false);

  const clickHandler = () => {
    setIsBakery(!isBakery);
    const filteredPosts = socialMediaPosts.filter(
      ({ category }) => category === "Bakery"
    );

    !isBakery
      ? setDisplayPosts(filteredPosts)
      : setDisplayPosts(socialMediaPosts);
  };

  useEffect(() => {
    getSocialMediaData();
  }, []);

  const getSocialMediaData = async () => {
    try {
      const response = await fakeFetch1("https://example.com/api/posts");
      if (response.status === 200) {
        setSocialMediaPosts(response.data.posts);
        setDisplayPosts(response.data.posts);
      }
    } catch (error) {}
  };
  return (
    <>
      <h1>Question 5</h1>
      <button onClick={clickHandler}>
        {!isBakery ? "Show Bakery" : "Show All"}
      </button>
      {displayPosts.map(({ caption, src, views, likes, category }) => (
        <div key={src}>
          <img src={src} />
          <h3>{caption}</h3>
          <p>
            <b>Likes: </b>
            {likes}
          </p>
          <p>
            <b>Views: </b>
            {views}
          </p>
        </div>
      ))}
    </>
  );
}
