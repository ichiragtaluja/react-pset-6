import { useEffect, useState } from "react";
import { fakeFetch } from "./fakeFetch";

export function DisplayToDos() {
  const [toDoData, setToDoData] = useState([]);

  useEffect(() => {
    getTodoData();
  }, []);

  const getTodoData = async () => {
    try {
      const response = await fakeFetch("https://example.com/api/todos");
      if (response.status === 200) {
        setToDoData(response.data.todos);
      }
    } catch (error) {}
  };
  return (
    <>
      <h1>Question 2</h1>
      {toDoData.map(({ title, desc, todos }) => (
        <div key={title}>
          <h3>
            {title}: {desc}
          </h3>
          <ol>
            {todos.map((task) => (
              <li key={task}>{task}</li>
            ))}
          </ol>
        </div>
      ))}
    </>
  );
}
