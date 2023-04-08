import { useState } from "react";

export function Project({ title, description, technologies, completed }) {
  const [isShowMore, setIsShowMore] = useState(false);

  const buttonHandler = () => {
    setIsShowMore(!isShowMore);
  };

  return (
    <div key={title}>
      <p>
        <b>Name: </b>
        {title}
      </p>
      <p>
        <b>Description: </b>
        {description}
      </p>
      {isShowMore && (
        <>
          <p>
            <b>Technologies: </b>
            {technologies}
          </p>
          <p>
            <b>Completed: </b>
            {completed}
          </p>
        </>
      )}
      <button value={title} onClick={buttonHandler}>
        {!isShowMore ? "Show More" : "Show Less"}
      </button>
      <br />
      <br />
    </div>
  );
}
