import React from "react";

const ResponsibilityDisplay = (props) => {
  const { job } = props;
  if(job.responsibilities){
  return (
    <div>
    <ul className="formLists">
      {job.responsibilities.map((responsibility) => {
        return <li key={responsibility.id}>{responsibility.text}</li>;
      })}
    </ul>
    </div>
  );
    }
};

export default ResponsibilityDisplay;