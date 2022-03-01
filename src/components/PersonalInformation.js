import React, { Component } from 'react';
import Name from './Name.js'
import JobTitle from './JobTitle.js'
import Photo from './Photo.js'
import Address from './Address.js'
import PhoneNumber from './PhoneNumber.js'
import Email from './Email.js'
import Biography from './Biography.js'


export default class PersonalInformation extends Component {
  constructor(props) { //unneeded if there's no state or eventhandlers to bind - but there are
    super(props)

    this.changeAppState = this.changeAppState.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  // changeParentState (info, value) {
  //   this.setState({[info]: value})
  // }

  changeAppState (info, value) {
    this.props.handlePersonalInformationChange(info, value)
  }

  onSubmit (event) {
    event.preventDefault();
  }

  render() {
    return(
      <div id="personal-information-input">
      Personal Information
        <Name info="name" value={this.props.personalInformationState.name} onSubmit={this.onSubmit} changeAppState={this.changeAppState}/>
        <JobTitle info="jobTitle" value={this.props.personalInformationState.jobTitle} onSubmit={this.onSubmit} changeAppState={this.changeAppState}/>
        <Photo info="photo" value={this.props.personalInformationState.photo} onSubmit={this.onSubmit} changeAppState={this.changeAppState}/>
        <Address info="address" value={this.props.personalInformationState.address} onSubmit={this.onSubmit} changeAppState={this.changeAppState}/>
        <PhoneNumber info="phoneNumber" value={this.props.personalInformationState.phoneNumber} onSubmit={this.onSubmit} changeAppState={this.changeAppState}/>
        <Email info="email" value={this.props.personalInformationState.email} onSubmit={this.onSubmit} changeAppState={this.changeAppState}/>
        <Biography info="biography" value={this.props.personalInformationState.biography} onSubmit={this.onSubmit} changeAppState={this.changeAppState}/>
      </div>
    )
  }
}