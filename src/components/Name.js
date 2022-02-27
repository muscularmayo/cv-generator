import React, { Component } from 'react';

export default class Name extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    this.props.changeParentState(this.props.info, event.target.value)
    this.setState({value: event.target.value})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value}  onChange={this.handleChange}/>
        </label>
      </form>
    );
  }

}