import React from "react";

const LookingForDisplay = (props) => {
  const { lookingFors } = props;
  return (
    <ul className="formLists">
      {lookingFors.map((lookingFor) => {
        return <li key={lookingFor.id}>{lookingFor.text}</li>;
      })}
    </ul>
  );
};

export default LookingForDisplay;