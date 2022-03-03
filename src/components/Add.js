import React, { Component } from 'react';

export default class Add extends Component {
  constructor(props) {
    super(props)

    this.addElement = this.addElement.bind(this)
  }

  addElement(event) {
    event.preventDefault();
  }

  render() {
    return (
      <button onClick={this.addElement}>Add</button>
    );
  }

}