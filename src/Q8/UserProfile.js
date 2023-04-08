import { useEffect, useState } from "react";
import { fakeFetch } from "./fakeFetch";

export function UserProfile() {
  const [userData, setUserData] = useState({});
  // const { name, age, gender, email, occupation } = userData;
  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    try {
      const response = await fakeFetch("https://example.com/api/profile");
      if (response.status === 200) {
        setUserData(response.data.profiles);
      }
    } catch (error) {}
  };

  const buttonHandler = () => {
    setUserData({ ...userData, name: "Emily" });
  };

  return (
    <>
      <h1>Question 8</h1>
      <p>
        <b>Name: </b>
        {userData.name}
      </p>
      <p>
        <b>Email:</b> {userData.email}
      </p>
      <p>
        <b>Age:</b> {userData.age}
      </p>
      <p>
        <b>Gender:</b> {userData.gender}
      </p>
      <p>
        <b>Occupation: </b>
        {userData.occupation}
      </p>
      <button onClick={buttonHandler}>Update Name</button>
    </>
  );
}
