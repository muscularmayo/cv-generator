import React, { Component } from 'react';

export default class Delete extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    //this.props.index = index
    this.props.deleteEducation(this.props.index)
    event.preventDefault();
  }

  render() {
    return (
      <button onClick={this.handleClick}>Delete</button>
    );
  }

}