import React from "react";

const DegreeDisplay = (props) => {
  const { school } = props;
  if (school.degrees) {
  return (
    <div className="jobEduTitle">
      {school.degrees.map((degree) => {
        return <div className="jobEduTitle" key={degree.id}>{degree.text}</div>;
      })}
    </div>
  );
    }
};

export default DegreeDisplay;