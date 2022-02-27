import React, { Component } from 'react';
import Name from './Name.js'
import JobTitle from './JobTitle.js'
import Photo from './Photo.js'
import Address from './Address.js'
import PhoneNumber from './PhoneNumber.js'
import Email from './Email.js'
import Biography from './Biography.js'


export default class PersonalInformation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      jobTitle: '',
      photo: '',
      address: '',
      phoneNumber: '',
      email: '',
      biography: '',
    }
    this.changeParentState = this.changeParentState.bind(this)
  }

  changeParentState (info, value) {
    this.setState({[info]: value})

  }
  render() {
    return(
      <div id="personal-information-input">
      Personal Information:
        <Name info="name" changeParentState={this.changeParentState}/>
        <JobTitle info="jobTitle" changeParentState={this.changeParentState}/>
        <Photo info="photo" changeParentState={this.changeParentState}/>
        <Address info="address" changeParentState={this.changeParentState}/>
        <PhoneNumber info="phoneNumber" changeParentState={this.changeParentState}/>
        <Email info="email" changeParentState={this.changeParentState}/>
        <Biography info="biography" changeParentState={this.changeParentState}/>
      </div>
    )
  }
}