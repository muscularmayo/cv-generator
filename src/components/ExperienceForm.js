import React, { Component } from 'react';

export default class ExperienceForm extends Component {
  constructor(props){
    super(props)

    this.changeAppState = this.changeAppState.bind(this)
  }

  changeAppState(event) {
    //this.props.index = index
    //event.target.value = info
    //event.target.name = name
    this.props.handleChange(event.target.value, event.target.name, this.props.index)
  }

  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <input value={this.props.experienceState.position} index={this.props.index} name="position" placeholder="Position" type="text" onChange={this.changeAppState}></input>
        <input value={this.props.experienceState.company} index={this.props.index} name="company" placeholder="Company" type="text" onChange={this.changeAppState}></input>
        <input value={this.props.experienceState.city} index={this.props.index} name="city" placeholder="City" type="text" onChange={this.changeAppState}></input>
        <input value={this.props.experienceState.from} index={this.props.index} name="from" placeholder="From" type="text" onChange={this.changeAppState}></input>
        <input value={this.props.experienceState.to} index={this.props.index} name="to" placeholder="To" type="text" onChange={this.changeAppState}></input>
      </form>
    )
  }

}