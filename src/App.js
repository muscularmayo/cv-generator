import React, { useState } from 'react';
import PersonalInformation from './components/PersonalInformation.js'
import Education from './components/Education.js'
import Experience from './components/Experience.js'
import Display from './components/Display.js'
import './app.css';

function App (props) {
  const [personalInformation, setPersonalInformation] = useState({
    name: '',
    jobTitle: '',
    photo: '',
    address: '',
    phoneNumber: '',
    email: '',
    biography: ''
  })

  const [education, setEducation] = useState([{
    university: '',
    city: '',
    degree: '',
    subject: '',
    from: '',
    to: '',
  }])

  const [experience, setExperience] = useState([{
    position: '',
    company: '',
    city: '',
    from: '',
    to: '',
    description: '',
  }])

  const handlePersonalInformationChange = (name, value) => {
    const newPersonalInformation = {...personalInformation}
    newPersonalInformation[name] = value;
    setPersonalInformation(newPersonalInformation)
  }

  const handleEducationChange = (object, index, del) => {
    const educationInfo = [...education];
    if(!del) {
      educationInfo[index] = object;
    } else {
      educationInfo.splice(index, 1)
    }
    setEducation(educationInfo)
  }

  const handleExperienceChange = (object, index, del) => {
    const experienceInfo = [...experience];
    if(!del) {
      experienceInfo[index] = object;
    } else {
      experienceInfo.splice(index,1)
    }
    setExperience(experienceInfo)
  }

  const state = {personalInformation, education, experience}

  return (
    <div>
        <PersonalInformation personalInformationState={personalInformation} handlePersonalInformationChange={handlePersonalInformationChange}/>
        <Education educationState={education} handleEducationChange={handleEducationChange} />
        <Experience experienceState={state.experience} handleExperienceChange={handleExperienceChange} />
        <Display data={state}/>
    </div>
  );

}

// class App extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       personalInformation: {
//         name: '',
//         jobTitle: '',
//         photo: '',
//         address: '',
//         phoneNumber: '',
//         email: '',
//         biography: ''
//       },
//       education: [{
//         university: '',
//         city: '',
//         degree: '',
//         subject: '',
//         from: '',
//         to: '',
//       }],
//       experience: [{
//         position: '',
//         company: '',
//         city: '',
//         from: '',
//         to: '',
//         description: '',
//       }],
//     }
//     this.handlePersonalInformationChange = this.handlePersonalInformationChange.bind(this)
//     this.handleEducationChange = this.handleEducationChange.bind(this)
//     this.handleExperienceChange = this.handleExperienceChange.bind(this)
//   }

//   handlePersonalInformationChange (name, value) {
//     const personalInformation = {...this.state.personalInformation}
//     personalInformation[name] = value;
//     this.setState({personalInformation})
//   }

//   handleEducationChange (object, index, del) {
//     const educationInfo = [...this.state.education]
//     if(!del) {
//       educationInfo[index] = object;
//     } else {
//       educationInfo.splice(index, 1)
//     }
//     this.setState({education: educationInfo})
//   }

//   handleExperienceChange (object, index, del) {
//     const experienceInfo = [...this.state.experience]
//     if(!del) {
//       experienceInfo[index] = object;
//     } else {
//       experienceInfo.splice(index, 1)
//     }
//     this.setState({experience: experienceInfo})
//   }

//   render() {
    // return (
    //   <div>
    //       <PersonalInformation personalInformationState={this.state.personalInformation} handlePersonalInformationChange={this.handlePersonalInformationChange}/>
    //       <Education educationState={this.state.education} handleEducationChange={this.handleEducationChange} />
    //       <Experience experienceState={this.state.experience} handleExperienceChange={this.handleExperienceChange} />
    //       <Display data={this.state}/>
    //   </div>
    // );
//   }

// }

export default App;
