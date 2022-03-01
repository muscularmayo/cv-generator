import React, { Component } from 'react';
import PersonalInformation from './components/PersonalInformation.js'
import Education from './components/Education.js'
import Experience from './components/Experience.js'
import Display from './components/Display.js'
import './app.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      personalInformation: {
        name: '',
        jobTitle: '',
        photo: '',
        address: '',
        phoneNumber: '',
        email: '',
        biography: ''
      },
      education: [],
      experience: [],
    }
    this.handlePersonalInformationChange = this.handlePersonalInformationChange.bind(this)
    this.handleEducationChange = this.handleEducationChange.bind(this)
    this.handleExperienceChange = this.handleExperienceChange.bind(this)
  }

  handlePersonalInformationChange (info, value) {
    const personalInformation = {...this.state.personalInformation}
    personalInformation[info] = value;
    this.setState({personalInformation})
  }

  handleEducationChange (info) {
    const educationInfo = [...this.state.education]
    educationInfo.push(info)
    this.setState({education: educationInfo})
  }

  handleExperienceChange (info) {
    const experienceInfo = [...this.state.experience]
    experienceInfo.push(info)
    this.setState({experience: experienceInfo})
  }

  render() {
    return (
      <div>
          <PersonalInformation personalInformationState={this.state.personalInformation} handlePersonalInformationChange={this.handlePersonalInformationChange}/>
          <Education handleEducationChange={this.handleEducationChange} />
          <Experience handleExperienceChange={this.handleExperienceChange} />
          <Display data={this.state}/>
      </div>
    );
  }

}

export default App;
