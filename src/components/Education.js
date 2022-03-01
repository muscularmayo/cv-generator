import React, { Component } from 'react';

export default class Education extends Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (info) {
    const currentState = [...this.props.educationState]
    const educationObject = {
      university: '',
      city: '',
      degree: '',
      subject: '',
      from: '',
      to: '',
    }

    currentState.push(educationObject)

  }

  render() {
    return (
      <div id="education-input">
        Education
        <form onSubmit={this.props.onSubmit}>
        <label>
          University:
          <input type="text"></input>
        </label>
        <label>
          City:
          <input type="text"></input>
        </label>
        <label>
          Degree:
          <input type="text"></input>
        </label>
        <label>
          Subject:
          <input type="text"></input>
        </label>
        <label>
          From:
          <input type="text"></input>
        </label>
        <label>
          To:
          <input type="text"></input>
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