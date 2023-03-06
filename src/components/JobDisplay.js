import React from "react";
import ResponsibilityDisplay from "./ResponsibilityDisplay";

const JobDisplay = (props) => {
  const { jobs } = props;
  return (
    <div >
      {jobs.map((job) => {
        return (
        <div key={job.id} className="jobEdu">
            <div className="jobEduLeft">
                <div className="jobEduTitle">{job.title}</div>
                <div className="date">{job.startMonth} {job.startYear} -
                {job.attending===true&&<span> Present</span>}{job.attending===false&&<span>{job.endMonth} {job.endYear}</span>}
                </div>
            </div>
            <div className="jobEduRight">
                <div className="companyCollege">{job.company}</div>
                {(job.city!==""&&job.state!=="")&&
                  <div className = "jobEduLocation">{job.city}, {job.state}</div>}
                {!(job.city!==""&&job.state!=="")&&
                <div className = "jobEduLocation">{job.city} {job.state}</div>}
                <div>Responsibilities:</div>
                <ResponsibilityDisplay job={job}/>
            </div>
        </div>
        );
      })}
    </div>
  );
};

export default JobDisplay;