import { useEffect, useState } from "react";
import { fakeFetch1 } from "./fakeFetch1";
import { Project } from "./Project";

export function DisplayProjects() {
  const [projectsData, setProjectsData] = useState([]);

  const getProjectData = async () => {
    try {
      const response = await fakeFetch1("https://example.com/api/projects");
      if (response.status === 200) {
        setProjectsData(response.data.projects);
      }
    } catch (error) {}
  };

  useEffect(() => {
    getProjectData();
  }, []);

  return (
    <>
      <h1>Question 7</h1>
      {projectsData.map(({ title, description, technologies, completed }) => (
        <Project
          title={title}
          description={description}
          technologies={technologies}
          completed={completed}
        />
      ))}
    </>
  );
}
