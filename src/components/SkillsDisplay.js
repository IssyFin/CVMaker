import React from "react";

const SkillsDisplay = (props) => {
  const { skills } = props;
  return (
    <ul className="formLists">
      {skills.map((skill) => {
        return <li key={skill.id}>{skill.text}</li>;
      })}
    </ul>
  );
};

export default SkillsDisplay;