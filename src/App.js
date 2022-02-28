import React, { Component } from 'react';
import PersonalInformation from './components/PersonalInformation.js'
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
    }
    this.handlePersonalInformationChange = this.handlePersonalInformationChange.bind(this)
  }

  handlePersonalInformationChange (info, value) {
    const personalInformation = {...this.state.personalInformation}
    personalInformation[info] = value;
    this.setState({personalInformation})
  }

  render() {
    return (
      <div>
        <PersonalInformation handlePersonalInformationChange={this.handlePersonalInformationChange}/>
        <Display data={this.state}/>
      </div>
    );
  }

}

export default App;
