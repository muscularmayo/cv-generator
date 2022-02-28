import React, { Component } from 'react';

export default class Biography extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    this.props.changeAppState(this.props.info, event.target.value)
    this.setState({value: event.target.value})
  }

  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <label>
          Biography:
          <input type="text" value={this.state.value}  onChange={this.handleChange}/>
        </label>
      </form>
    );
  }

}