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
        <div key={'education' + index}>
          <div>University: {element.university} </div>
          <div>City: {element.city} </div>
          <div>Degree: {element.degree} </div>
          <div>Subject: {element.subject} </div>
          <div>From: {element.from} </div>
          <div>To: {element.to} </div>
        </div>
      )
    })
    return (
      <div id="display">
        <div id="personal-info-display">
          <div id="name">Name: {personalInformation.name}</div>
          <div id="job-title">Job Title: {personalInformation.jobTitle}</div>
          <div id="photo">Photo: {personalInformation.photo}</div>
          <div id="address">Address: {personalInformation.address}</div>
          <div id="phone-number">Phone Number: {personalInformation.phoneNumber}</div>
          <div id="email">Email: {personalInformation.email} </div>
          <div id="biography">Biography: {personalInformation.biography} </div>
        </div>
        <div id="education-display">
          {educationList}
        </div>
        <div id="experience-display">
          {/* same for looping through experience array*/}
        </div>
      </div>

    )
  }

}