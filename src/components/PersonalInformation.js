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
  }

  // changeParentState (info, value) {
  //   this.setState({[info]: value})
  // }

  changeAppState (info, value) {
    this.props.handlePersonalInformationChange(info, value)
  }

  render() {
    return(
      <div id="personal-information-input">
      Personal Information:
        <Name info="name" changeAppState={this.changeAppState}/>
        <JobTitle info="jobTitle" changeAppState={this.changeAppState}/>
        <Photo info="photo" changeAppState={this.changeAppState}/>
        <Address info="address" changeAppState={this.changeAppState}/>
        <PhoneNumber info="phoneNumber" changeAppState={this.changeAppState}/>
        <Email info="email" changeAppState={this.changeAppState}/>
        <Biography info="biography" changeAppState={this.changeAppState}/>
      </div>
    )
  }
}