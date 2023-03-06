import React from "react";
import "../styles/App-style.css";
import SkillsDisplay from "./SkillsDisplay";
import LookingForDisplay from "./LookingForDisplay";
import EduDisplay from "./EduDisplay";
import JobDisplay from "./JobDisplay";

const ResumeDisplay = (props) => {
    const { schools,jobs,lookingFors,skills,personalInfo } = props;
    return (
      <div >
        <div id="previewPage">
          <div id="previewBox">
            <div id="nameBar">
              <img id="photoDisc" alt="na"/>
              <h1>{personalInfo.firstName} {personalInfo.lastName}</h1>
              <h4>{personalInfo.title}</h4>
            </div>
            <div id="underNameBar">
              <div id="personalInfoBar">
                <div id="lookingFor" className="personalInfoCard">
                  <h3>Looking for:</h3>
                  <LookingForDisplay lookingFors={lookingFors}/>
                </div>
                <div id="skillsBar" className="personalInfoCard">
                  <h3>Skills:</h3>
                  <SkillsDisplay skills={skills} />
                </div>
                <div id="contactBar" className="personalInfoCard">
                    <h3>Contact:</h3>
                    <div>
                        <div>Address: </div>
                        <div>{personalInfo.street1}</div>
                        <div>{personalInfo.street2}</div>
                        <div>{personalInfo.city},{personalInfo.state} {personalInfo.zip}</div>
                    </div>
                    <div>
                        <div>Phone: </div>
                        <div>{personalInfo.phone}</div>
                    </div>
                    <div>
                        <div>Email: </div>
                        <div>{personalInfo.email}</div>
                    </div>
                    <div>
                        <div>{personalInfo.linkedIn}</div>
                        <div>{personalInfo.website}</div>
                    </div>
                </div>
              </div>
              <div id="contentPage">
                <div id="blurbBar">
                  {personalInfo.blurb}
                </div>
                <div id="mainContent">
                  <div className="contentSection">
                    <h2>Experience:</h2>
                    <JobDisplay jobs={jobs} />
                  </div>
                  <div className="contentSection">
                    <h2>Education:</h2>
                    <EduDisplay schools={schools} />
                  </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ResumeDisplay;