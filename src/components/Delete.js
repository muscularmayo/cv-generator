import React, { Component } from 'react';

export default class Delete extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    //this.props.index = index
    if(this.props.education) {
      this.props.deleteEducation(this.props.index)
    } else if (this.props.experience) {
      this.props.deleteExperience(this.props.index)
    }
    event.preventDefault();
  }

  render() {
    return (
      <button onClick={this.handleClick}>Delete</button>
    );
  }

}