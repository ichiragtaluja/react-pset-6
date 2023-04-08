import { useEffect, useState } from "react";
import { fakeFetch1 } from "./fakeFetch1";

export function ShowHabits() {
  const [habitsTrackerData, setHabitsTrackerData] = useState([]);
  const [displayData, setDisplayData] = useState([]);
  const [isArchieved, setIsArchieved] = useState(false);

  const getHabitsData = async () => {
    try {
      const response = await fakeFetch1("https://example.com/api/habits");
      if (response.status === 200) {
        setHabitsTrackerData(response.data.habits);
        const filteredData = response.data.habits.filter(
          (data) => !data.archived
        );
        setDisplayData(filteredData);
      }
    } catch (error) {}
  };

  const clickHandler = () => {
    setIsArchieved(!isArchieved);
    const filteredData = habitsTrackerData.filter((data) =>
      isArchieved ? data.archived : !data.archived
    );
    setDisplayData(filteredData);
  };

  useEffect(() => {
    getHabitsData();
  }, []);
  return (
    <>
      <h1>Quesion 6</h1>

      <h2>{isArchieved ? "Archieved" : "Unarchieved"}</h2>

      <button onClick={clickHandler}>
        {!isArchieved ? "Show Archieved" : "Show Unarchieved"}
      </button>

      {displayData.map(
        ({ title, desc, daysFollowed, daysSkipped, archived }) => (
          <div>
            <h3>{title}</h3>
            <p>{desc}</p>
            <p>
              <b>Days Followed: </b>
              {daysFollowed}
            </p>
            <p>
              <b>Days Skipped: </b>
              {daysSkipped}
            </p>
            <br />
          </div>
        )
      )}
    </>
  );
}
