import React,{Component} from "react";
import uniqid from "uniqid";
import "./styles/App-style.css";
import SkillsDisplay from "./components/SkillsDisplay";
import LookingForDisplay from "./components/LookingForDisplay";
import EduDisplay from "./components/EduDisplay";
import JobDisplay from "./components/JobDisplay";
import ResponsibilityDisplay from "./components/ResponsibilityDisplay";
import ResumeDisplay from "./components/ResumeDisplay";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personalInfo:{
        firstName:"Your",
        lastName:"Name",
        title:"Your Title",
        street1:"123 Your Street",
        street2:"Apartment X",
        city:"City",
        state:"AZ",
        zip:"12345",
        phone:"555-555-5555",
        email:"youremail@aol.com",
        linkedIn:"linkedin.com/in/your-profile",
        website:"yourdevwebsite.dev",
        blurb:"Write a little about yourself here. What kind of job are you looking for? What kind of person are you? What do you enjoy? What are your strengths?",
      },
      skill:{
        text:"",
        id:uniqid()
      },
      skills:[],
      lookingFor:{
        text:"",
        id:uniqid()
      },
      lookingFors:[],
      job:{
        startMonth:"",
        startYear:"",
        endMonth:"",
        endYear:"",
        attending:false,
        title:"",
        company:"",
        city:"",
        state:"",
        responsibility:{
          text:"",
          id:uniqid()
        },
        responsibilities:[],
        id:uniqid()
      },
      jobs:[],
      school:{
        startMonth:"",
        startYear:"",
        endMonth:"",
        endYear:"",
        attending:false,
        degree:"",
        college:"",
        city:"",
        state:"",
        gpa:"",
        minor:"",
        otherInfo:{
          text:"",
          id:uniqid()
        },
        id:uniqid()
      },
      schools:[]
    };
    this.onSubmitPersonal=this.onSubmitPersonal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addSkill=this.addSkill.bind(this);
    this.addLookingFor = this.addLookingFor.bind(this);
    this.inputFirstName = React.createRef();
    this.inputLastName = React.createRef();
    this.inputTitle=React.createRef();
    this.inputStreet1 = React.createRef();
    this.inputStreet2 = React.createRef();
    this.inputCity = React.createRef();
    this.inputState = React.createRef();
    this.inputZip = React.createRef();
    this.inputPhone = React.createRef();
    this.inputEmail = React.createRef();
    this.inputLinkedIn = React.createRef();
    this.inputWebsite = React.createRef();
    this.inputBlurb = React.createRef();
    this.inputPhoto = React.createRef();
    this.inputSkills = React.createRef();
    this.inputLookingFors=React.createRef();
    this.inputJobStart = React.createRef();
    this.inputJobEnd = React.createRef();
    this.inputJobAttending = React.createRef();
    this.inputJobTitle = React.createRef();
    this.inputJobCompany = React.createRef();
    this.inputJobCity = React.createRef();
    this.inputJobState = React.createRef();
    this.inputJobResponsibility = React.createRef();
    this.inputSchoolStart = React.createRef();
    this.inputSchoolEnd = React.createRef();
    this.inputSchoolAttending = React.createRef();
    this.inputSchoolDegree = React.createRef();
    this.inputSchoolCollege = React.createRef();
    this.inputSchoolCity = React.createRef();
    this.inputSchoolState = React.createRef();
    this.inputSchoolGPA = React.createRef();
    this.inputSchoolMinor = React.createRef();
    this.resumeRef = React.createRef();
  };
  onSubmitPersonal = (e) => {
    e.preventDefault();
    this.setState({
      personalInfo:{
        firstName:this.inputFirstName.current.value,
        lastName:this.inputLastName.current.value,
        title:this.inputTitle.current.value,
        street1:this.inputStreet1.current.value,
        street2:this.inputStreet2.current.value,
        city:this.inputCity.current.value+",",
        state:this.inputState.current.value,
        zip:this.inputZip.current.value,
        phone:this.inputPhone.current.value,
        email:this.inputEmail.current.value,
        linkedIn:this.inputLinkedIn.current.value,
        website:this.inputWebsite.current.value,
        blurb:this.inputBlurb.current.value,
      },
    });
  };
  updatePhoto = (e) =>{
    const reader = new FileReader(); 
    let file = e.target.files[0];
    if(file){
      reader.readAsDataURL(file);
      reader.onloadend = function() {
        let newURL = URL.createObjectURL(file);
        document.getElementById("photoDisc").src=newURL;
        document.getElementById("photoDisc").alt=newURL;
      };
    };
    
  }
  handleChange = (e) => {
    const monthIndex = ["Jan.","Feb.","Mar.","Apr.","May","Jun.","Jul.","Aug.","Sep.","Oct.","Nov.","Dec"];
    let schoolStartDate = new Date(this.inputSchoolStart.current.value);
    let schoolEndDate = new Date(this.inputSchoolEnd.current.value);
    let schoolDates = [monthIndex[schoolStartDate.getMonth()],schoolStartDate.getFullYear(),monthIndex[schoolEndDate.getMonth()],schoolEndDate.getFullYear()];
    let jobStartDate = new Date(this.inputJobStart.current.value);
    let jobEndDate = new Date(this.inputJobEnd.current.value);
    let jobDates = [monthIndex[jobStartDate.getMonth()],jobStartDate.getFullYear(),monthIndex[jobEndDate.getMonth()],jobEndDate.getFullYear()];
    console.log(jobDates);
    this.setState({
      skill:{
        text:this.inputSkills.current.value,
        id:this.state.skill.id
      },
      lookingFor:{
        text:this.inputLookingFors.current.value,
        id:this.state.lookingFor.id
      },
      job:{
        startMonth:jobDates[0],
        startYear:jobDates[1],
        endMonth:jobDates[2],
        endYear:jobDates[3],
        attending:this.inputJobAttending.current.checked,
        title:this.inputJobTitle.current.value,
        company:this.inputJobCompany.current.value,
        city:this.inputJobCity.current.value,
        state:this.inputJobState.current.value,
        responsibility:{
          text:this.inputJobResponsibility.current.value,
          id:this.state.job.responsibility.id
        },
        responsibilities:this.state.job.responsibilities,
        id:this.state.job.id
      },
      jobs:this.state.jobs,
      school:{
        startMonth:schoolDates[0],
        startYear:schoolDates[1],
        endMonth:schoolDates[2],
        endYear:schoolDates[3],
        attending:this.inputSchoolAttending.current.checked,
        degree:this.inputSchoolDegree.current.value,
        college:this.inputSchoolCollege.current.value,
        city:this.inputSchoolCity.current.value,
        state:this.inputSchoolState.current.value,
        gpa:this.inputSchoolGPA.current.value,
        minor:this.inputSchoolMinor.current.value,
        id:this.state.school.id
      },
      schools:this.state.schools
    });
  };
  addSkill = (e) =>{
    e.preventDefault();
    this.setState({
      skills:this.state.skills.concat(this.state.skill),
      skill:{
        text:"",
        id:uniqid()
      },
    });
    this.inputSkills.current.value="";
    this.inputSkills.current.focus();
  }
  addLookingFor = (e) =>{
    e.preventDefault();
    this.setState({
      lookingFors:this.state.lookingFors.concat(this.state.lookingFor),
      lookingFor:{
        text:"",
        id:uniqid()
      },
    });
    this.inputLookingFors.current.value="";
    this.inputLookingFors.current.focus();
  }
  addEdu = (e) =>{
    e.preventDefault();
    if(this.state.school){
      this.setState({
        schools:this.state.schools.concat(this.state.school),
        school:{
          startMonth:"",
          startYear:"",
          endMonth:"",
          endYear:"",
          attending:false,
          degree:"",
          college:"",
          city:"",
          state:"",
          gpa:"",
          minor:"",
          otherInfo:{
            text:"",
            id:uniqid()
          },
          otherInfos:[],
          id:uniqid()
        }  
      });
    }
    this.inputSchoolStart.current.value="";
    this.inputSchoolEnd.current.value="";
    this.inputSchoolDegree.current.value="";
    this.inputSchoolCollege.current.value="";
    this.inputSchoolCity.current.value="";
    this.inputSchoolState.current.value="";
    this.inputSchoolGPA.current.value="";
    this.inputSchoolMinor.current.value="";
  }
  addResponsibility = (e) =>{
    e.preventDefault();
    if(this.state.job.responsibility&&this.state.job.responsibilities){
      this.setState({
        job:{
          responsibilities: this.state.job.responsibilities.concat(this.state.job.responsibility),
          responsibility:{
            text:"",
            id:uniqid()
          },
          startMonth:this.state.job.startMonth,
          startYear:this.state.job.startYear,
          endMonth:this.state.job.endMonth,
          endYear:this.state.job.endYear,
          attending:this.inputJobAttending.current.checked,
          title:this.inputJobTitle.current.value,
          company:this.inputJobCompany.current.value,
          city:this.inputJobCity.current.value,
          state:this.inputJobState.current.value,
          id:this.state.job.id
        }
      });
    };
    this.inputJobResponsibility.current.value="";
    this.inputJobResponsibility.current.focus();
  }
  addJob = (e) =>{
    e.preventDefault();
    if(this.state.job){
      this.setState({
        jobs:this.state.jobs.concat(this.state.job),
        job:{
          startMonth:"",
          startYear:"",
          endMonth:"",
          endYear:"",
          attending:false,
          responsibility:{
            text:"",
            id:uniqid()
          },
          responsibilities:[],
          company:"",
          city:"",
          state:"",
          title:"",
          id:uniqid()
        }  
      });
    }
    this.inputJobStart.current.value="";
    this.inputJobEnd.current.value="";
    this.inputJobTitle.current.value="";
    this.inputJobCompany.current.value="";
    this.inputJobCity.current.value="";
    this.inputJobState.current.value="";
    this.inputJobResponsibility.current.value="";
  }
  printResume = (e) =>{     
    let printContents = document.getElementById('previewBox').innerHTML;
    let originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents; 
  }
  render() {
    const {skills,lookingFors,schools,jobs,job,personalInfo}=this.state;
    return (
      <div>
        <div>
          <div id="pagebox">
          <h1>Tell me about yourself!</h1>
          <h4>Scroll down for your prepared CV</h4>
          <h2>Personal Information:</h2>
          <form className="formBlock">
            <div className="formSubBlock">
              <label htmlFor="firstName">First name:</label>
              <input
                type="text"
                id="firstNameInput"
                ref={this.inputFirstName}
              />
              <label htmlFor="lastName">Last name:</label>
              <input 
              type="text" 
              id="firstNameInput"
              ref={this.inputLastName}
              />
              <label htmlFor="jobTitle">Current title:</label>
              <input
              type="text"
              id="titleInput"
              ref={this.inputTitle}
              />
              <label htmlFor="photo">Upload a photo:</label>
              <input 
              type="file" 
              id="photoInput"
              accept="image/png, image/jpeg"
              ref={this.inputPhoto}
              onInputCapture={this.updatePhoto}
              />
            </div>
            <div className="formSubBlock">
              <label htmlFor="street1">Street address:</label>
              <input
                type="text"
                id="street1Input"
                ref={this.inputStreet1}
              />
              <label htmlFor="street2">Street address (opt):</label>
              <input 
              type="text" 
              id="street2Input"
              ref={this.inputStreet2}
              />
              <label htmlFor="city">City:</label>
              <input
                type="text"
                id="cityInput"
                ref={this.inputCity}
              />
              <label htmlFor="state">State:</label>
              <input 
              type="text" 
              id="stateInput"
              ref={this.inputState}
              />
              <label htmlFor="zip">Zip Code:</label>
              <input
                type="number"
                pattern="[0-9]{5}"
                id="zipInput"
                ref={this.inputZip}
              />
            </div>
            <div className="formSubBlock">
              <label htmlFor="phone">Phone number:</label>
              <input 
              type="tel" 
              id="phoneInput"
              ref={this.inputPhone}
              />
              <label htmlFor="email">Email:</label>
              <input 
              type="email" 
              id="emailInput"
              ref={this.inputEmail}
              />
              <label htmlFor="linkedIn">LinkedIn:</label>
              <input
                type="url"
                id="linkedInInput"
                ref={this.inputLinkedIn}
              />
              <label htmlFor="website">Website:</label>
              <input 
              type="url" 
              id="websiteInput"
              ref={this.inputWebsite}
              />
            </div>
            <div className="blurbBlock" id="blurbBlock">
              <label htmlFor="blurb">Tell us a bit about yourself:</label>
              <textarea className="blurbInput" ref={this.inputBlurb}/>
            </div>
          </form>
          <button onClick={this.onSubmitPersonal}>Add Personal Info</button>
          <h2>Education:</h2>
          <EduDisplay schools={schools} />
          <form className="formBlock">
            <div className="formSubBlock">
              <label htmlFor="degree">Degree:</label>
                <input
                type="text"
                id="degreeInput"
                ref={this.inputSchoolDegree}
                onChange={this.handleChange}
              />
              <label htmlFor="Minor">Minor:</label>
              <input 
              type="text"
              id="minorInput"
              ref={this.inputSchoolMinor}
              onChange={this.handleChange}
              />
              <label htmlFor="college">College:</label>
              <input
              type="text"
              id="collegeInput"
              ref={this.inputSchoolCollege}
              onChange={this.handleChange}
              />
              <label htmlFor="city">City:</label>
              <input 
              type="text"
              id="collegeCityInput"
              ref={this.inputSchoolCity}
              onChange={this.handleChange}
              />
              <label htmlFor="state">State:</label>
              <input 
              type="text"
              id="collegeStateInput"
              ref={this.inputSchoolState}
              onChange={this.handleChange}
              />
            </div>
            <div className="formSubBlock">
            <label htmlFor="eduStart">Start Date:</label>
              <input
              type="date"
              id="startEduInput"
              ref={this.inputSchoolStart}
              onChange={this.handleChange}
              />
              <label htmlFor="eduEnd">Graduated:</label>
              <input
              type="date"
              id="endEduInput"
              ref={this.inputSchoolEnd}
              onChange={this.handleChange}
              />
              <label htmlFor="eduAttending" className="checkboxLabel">I am a current student:</label>
              <input
              type="checkbox"
              id="attendingEduInput"
              ref={this.inputSchoolAttending}
              onChange={this.handleChange}
              />
              <label htmlFor="GPA">GPA:</label>
              <input 
              type="text"
              id="gpaInput"
              ref={this.inputSchoolGPA}
              onChange={this.handleChange}
              />
            </div>
          </form>
          <button onClick={this.addEdu}>Add Education</button>
          <h2>Experience:</h2>
          <JobDisplay jobs={jobs} />
          <form className="formBlock" id="extendableFormBlock">
            <div className="formSubBlock">
            <label htmlFor="title">Title:</label>
              <input
              type="text"
              id="titleInput"
              ref={this.inputJobTitle}
              />
              <label htmlFor="company">Company:</label>
              <input
              type="text"
              id="companyInput"
              ref={this.inputJobCompany}
              />
              <label htmlFor="city">City:</label>
              <input 
              type="text"
              id="jobCityInput"
              ref={this.inputJobCity}
              />
              <label htmlFor="state">State:</label>
              <input 
              type="text"
              id="jobStateInput"
              ref={this.inputJobState}
              />
            </div>
            <div id="extendableFormSubBlock">
            <label htmlFor="JobStart">Start Date:</label>
              <input
              type="date"
              id="startJobInput"
              ref={this.inputJobStart}
              onChange={this.handleChange}
              />
              <label htmlFor="jobEnd">End Date:</label>
              <input
              type="date"
              id="endJobInput"
              ref={this.inputJobEnd}
              onChange={this.handleChange}
              />
              <label htmlFor="jobAttending" className="checkboxLabel">I currently work here: </label>
              <input
              type="checkbox"
              id="attendingJobInput"
              ref={this.inputJobAttending}
              />
              <label htmlFor="responsibilities">Responsibilities:</label>
              <div className="responsibilityInputBar">
                <input 
                type="text"
                id="responsibilityInput"
                ref={this.inputJobResponsibility}
                onChange={this.handleChange}
                />
                <button onClick={this.addResponsibility} aria-label="add responsibility">+</button>
                <ResponsibilityDisplay job={job}/>
              </div>
              
            </div>
          </form>
          <button onClick={this.addJob}>Add Experience</button>
          <h2>Skills:</h2>
          <SkillsDisplay skills={skills} />
            <form className="singleColumnInput">
              <input
              type="text"
              id="skillInput"
              ref={this.inputSkills}
              onChange={this.handleChange}
              />
              <button onClick={this.addSkill} aria-label="add skill">+</button>
            </form>
          <h2>Looking for:</h2>
          <LookingForDisplay lookingFors={lookingFors}/>
            <form className="singleColumnInput">
              <input
              type="text"
              id="lookingForInput"
              ref={this.inputLookingFors}
              onChange={this.handleChange}
              />
              <button onClick={this.addLookingFor} aria-label="add job I'm looking for">+</button>
            </form>
          <h1>Preview your resume below</h1>
          <h4>(Or generate a pdf <button onClick={this.printResume} id="printButton">here</button>)</h4>
          </div>
        </div>
        <div id="previewViewport">
          <ResumeDisplay skills={skills} jobs={jobs} schools={schools} personalInfo={personalInfo} lookingFors={lookingFors}/>
          </div>
      </div>
    );
  }
}

export default App;
