import { useEffect, useState } from "react";
import { fakeFetch1 } from "./fakeFetch1";

export function SocialMediaProfile() {
  const [profileDetails, setProfileDetails] = useState({});
  const [displayProfileDetails, setDisplayProfileDetails] = useState({});
  const [isDisabled, setIsDisabled] = useState(false);

  const getProfileDetails = async () => {
    try {
      const response = await fakeFetch1("https://example.com/api/profile");
      if (response.status === 200) {
        setProfileDetails(response.data.profile);
        setDisplayProfileDetails(response.data.profile);
      }
    } catch (error) {}
  };

  const buttonHandler = () => {
    setDisplayProfileDetails({
      ...displayProfileDetails,
      followers: displayProfileDetails.followers + 1,
    });
    setIsDisabled(!isDisabled);
  };

  useEffect(() => {
    getProfileDetails();
  }, []);
  return (
    <>
      <h1>Question 10</h1>
      <h3>{displayProfileDetails.name}</h3>
      <p>
        <b>Age: </b>
        {displayProfileDetails.age}
      </p>
      <p>
        <b>Gender: </b>
        {displayProfileDetails.gender}
      </p>
      <p>
        <b>Email: </b>
        {displayProfileDetails.email}
      </p>
      <p>
        <b>Occupation: </b>
        {displayProfileDetails.occupation}
      </p>
      <p>
        <b>Followers: </b>
        {displayProfileDetails.followers}
      </p>
      <p>
        <b>Followed By: </b>
        {displayProfileDetails.followedBy}
      </p>
      <button disabled={isDisabled} onClick={buttonHandler}>
        Follow John
      </button>
    </>
  );
}
