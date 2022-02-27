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
  }
  render() {
    return(
      <div id="personal-information-input">
      Personal Information:
        <Name />
        <JobTitle />
        <Photo />
        <Address />
        <PhoneNumber />
        <Email />
        <Biography />
      </div>
    )
  }
}