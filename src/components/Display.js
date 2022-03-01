import React, { Component } from 'react';

export default class Display extends Component {
  // this will contain all the info that's gonnab e input, all dependent on props being passed in
  render() {
    const personalInformation = this.props.data.personalInformation
    const educationInformation = this.props.data.education;
    const experienceInformation = this.props.data.experience;
    // const education = this.props.data.education
    // const experience = this.props.data.experience
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
          {/* we are going to have to loop through education array or something to make this part work */}
        </div>
        <div id="experience-display">
          {/* same for looping through experience array*/}
        </div>
      </div>

    )
  }

}