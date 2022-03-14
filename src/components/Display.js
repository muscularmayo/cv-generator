import React, { Component } from 'react';

export default class Display extends Component {
  // this will contain all the info that's gonnab e input, all dependent on props being passed in
  render() {
    const personalInformation = this.props.data.personalInformation
    const educationInformation = this.props.data.education;
    const experienceInformation = this.props.data.experience;
    // const education = this.props.data.education
    // const experience = this.props.data.experience

    const educationList = educationInformation.map((element, index) => {
      //element is an object
      return(
        <div className="education-display" key={'education' + index}>
          <div className="university">University: {element.university} </div>
          <div className="city">City: {element.city} </div>
          <div className="degree">Degree: {element.degree} </div>
          <div className="subject">Subject: {element.subject} </div>
          <div className="from education-from">From: {element.from} </div>
          <div className="to education-to">To: {element.to} </div>
        </div>
      )
    })

    const experienceList = experienceInformation.map((element, index) => {
      return (
        <div className="experience-display" key={'experience' + index}>
          <div className="position">Position: {element.position} </div>
          <div className="company">Company: {element.company} </div>
          <div className="city">City: {element.city} </div>
          <div className="from experience-from">From: {element.from} </div>
          <div className="to experience-to">To: {element.to} </div>
          <div className="description">Job Description: {element.description} </div>
        </div>
      )
    })
    return (
      <div id="display">
        <div id="name-and-title">
            <div id="name"> {personalInformation.name}</div>
            <div id="job-title"> {personalInformation.jobTitle}</div>
        </div>
        <div id="inner-display">
          <div id="biography-header">Biography</div>
          <div id="biography"> {personalInformation.biography}</div>

          <div id="personal-info-display">
            <img id="photo" src={personalInformation.photo} alt="cover pic"></img>
            <div id="address">Address: {personalInformation.address}</div>
            <div id="phone-number">Phone Number: {personalInformation.phoneNumber}</div>
            <div id="email">Email: {personalInformation.email} </div>
          </div>
          <div id="education-display">Education</div>
          <div id="education">{educationList}</div>
          <div id="experience-display">Experience </div>
          <div id="experience"> {experienceList}</div>
        </div>

      </div>

    )
  }

}