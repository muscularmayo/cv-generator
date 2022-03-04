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
      education: [{
        university: '',
        city: '',
        degree: '',
        subject: '',
        from: '',
        to: '',
      }],
      experience: [{
        position: '',
        company: '',
        city: '',
        from: '',
        to: '',
      }],
    }
    this.handlePersonalInformationChange = this.handlePersonalInformationChange.bind(this)
    this.handleEducationChange = this.handleEducationChange.bind(this)
    this.handleExperienceChange = this.handleExperienceChange.bind(this)
  }

  handlePersonalInformationChange (name, value) {
    const personalInformation = {...this.state.personalInformation}
    personalInformation[name] = value;
    this.setState({personalInformation})
  }

  handleEducationChange (object, index, del) {
    const educationInfo = [...this.state.education]
    if(!del) {
      educationInfo[index] = object;
    } else {
      educationInfo.splice(index, 1)
    }
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
          <Education educationState={this.state.education} handleEducationChange={this.handleEducationChange} />
          <Experience experienceState={this.state.experience} handleExperienceChange={this.handleExperienceChange} />
          <Display data={this.state}/>
      </div>
    );
  }

}

export default App;
