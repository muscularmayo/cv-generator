import React, { Component } from 'react';

export default class Email extends Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    this.props.changeAppState(this.props.info, event.target.value)
  }

  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
          <input placeholder="Email address" type="text" value={this.props.value}  onChange={this.handleChange}/>
      </form>
    );
  }

}