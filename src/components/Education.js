import React, { Component } from 'react';

export default class Education extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 1
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (info) {
    const educationObject = {
      university: '',
      city: '',
      degree: '',
      subject: '',
      from: '',
      to: '',
    }

    this.props.handleEducationChange(educationObject)

  }

  addEducation () {
    // we will add another object here
  }

  render() {
    let x = []
    for(let i = 0; i < this.state.count; i++) {
      x.push(
        <div id={'education' + i} key={'education' + i}>
          Education
          <form onSubmit={this.props.onSubmit}>
          <label>
            University:
            <input defaultValue="university" type="text"></input>
          </label>
          <label>
            City:
            <input defaultValue="city" type="text"></input>
          </label>
          <label>
            Degree:
            <input defaultValue="degree" type="text"></input>
          </label>
          <label>
            Subject:
            <input defaultValue="subject" type="text"></input>
          </label>
          <label>
            From:
            <input defaultValue="from" type="text"></input>
          </label>
          <label>
            To:
            <input defaultValue="to" type="text"></input>
          </label>
          {/* add and delete button are necessary here */}
        </form>
        </div>
      )
    }
    return x

  }


  // render() {
  //   return (
  //     <form onSubmit={this.props.onSubmit}>
  //       <label>
  //         Biography:
  //         <input type="text" value={this.props.value}  onChange={this.handleChange}/>
  //       </label>
  //     </form>
  //   );
  // }
}