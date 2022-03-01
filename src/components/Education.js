import React, { Component } from 'react';

export default class Education extends Component {
  constructor(props) {
    super(props)

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

  render() {
    return (
      <div id="education-input">
        Education
        <form onSubmit={this.props.onSubmit}>
        <label>
          University:
          <input value="university" type="text"></input>
        </label>
        <label>
          City:
          <input value="city" type="text"></input>
        </label>
        <label>
          Degree:
          <input value="degree" type="text"></input>
        </label>
        <label>
          Subject:
          <input value="subject" type="text"></input>
        </label>
        <label>
          From:
          <input value="from" type="text"></input>
        </label>
        <label>
          To:
          <input value="to" type="text"></input>
        </label>
      </form>
      </div>

    )
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