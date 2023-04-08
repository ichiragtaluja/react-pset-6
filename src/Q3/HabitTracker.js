import { useEffect, useState } from "react";
import { fakeFetch } from "./fakeFetch";

export function HabitTracker() {
  const [habitTackerData, setHabitTrackerData] = useState([]);

  useEffect(() => {
    getHabitTrackerData();
  }, []);

  const getHabitTrackerData = async () => {
    try {
      const response = await fakeFetch("https://example.com/api/habits");
      if (response.status === 200) {
        setHabitTrackerData(response.data.habits);
      }
    } catch (error) {}
  };
  return (
    <>
      <h1>Question 3</h1>
      <ul>
        {habitTackerData.map(({ title, desc, daysFollowed, daysSkipped }) => (
          <li>
            <h3>{title}</h3>
            <p>{desc}</p>
            <p>
              <b>Days Followed: </b> {daysFollowed}
            </p>
            <p>
              <b>Days skipped: </b> {daysSkipped}
            </p>
            <br />
          </li>
        ))}
      </ul>
    </>
  );
}
