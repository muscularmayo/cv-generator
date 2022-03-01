import React, { Component } from 'react';

export default class JobTitle extends Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    this.props.changeAppState(this.props.info, event.target.value)
  }

  addEducation () {
    // we will add another object here
  }

  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <label>
          Job Title:
          <input type="text" value={this.props.value}  onChange={this.handleChange}/>
        </label>
      </form>
    );
  }

}