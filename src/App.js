import React, { Component } from 'react';
import PersonalInformation from './components/PersonalInformation.js'
import Display from './components/Display.js'
import './app.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      personalInformation: {
        name: 'test name',
        jobTitle: 'test job title',
        photo: 'fake photo??',
        address: '310 first street, josephino brazil',
        phoneNumber: '1234567890',
        email: 'batman@batmail.com',
        biography: 'i once was a nerd and now i am a giganerd making gigachad moves in the brain of a gigaroni'
      },
    }
  }
  render() {
    return (
      <div>
        <PersonalInformation />
        <Display data={this.state.personalInformation}/>
      </div>
    );
  }

}

export default App;
