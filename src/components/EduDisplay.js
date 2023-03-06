import React from "react";

const EduDisplay = (props) => {
  const { schools } = props;
  return (
    <div >
      {schools.map((school) => {
        return (
        <div key={school.id} className="jobEdu">
            <div className="jobEduLeft">
              <div className="jobEduTitle">{school.degree}</div>
                <div className="date">{school.startMonth} {school.startYear} - 
                {school.attending===true&&<span> Present</span>}{school.attending===false&&<span> {school.endMonth} {school.endYear}</span>}
                </div>
            </div>
            <div className="jobEduRight">
                <div className="companyCollege">{school.college}</div>
                {(school.city!==""&&school.state!=="")&&
                  <div className = "jobEduLocation">{school.city}, {school.state}</div>}
                {!(school.city!==""&&school.state!=="")&&
                <div className = "jobEduLocation">{school.city} {school.state}</div>}
                {school.gpa!=="" && 
                <div className="jobEduResponsibilities">GPA: {school.gpa}</div>
                }
                {school.minor!==""&&
                  <div className="jobEduResponsibilities">Minor in {school.minor}</div>}
            </div>
        </div>
        );
      })}
    </div>
  );
};

export default EduDisplay;