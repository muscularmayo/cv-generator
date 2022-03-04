import React, { Component } from 'react';

export default class EducationForm extends Component {
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
        <input value={this.props.educationState.university} index={this.props.index} name="university" placeholder="University name" type="text" onChange={this.changeAppState}></input>
        <input value={this.props.educationState.city} index={this.props.index} name="city" placeholder="City" type="text" onChange={this.changeAppState}></input>
        <input value={this.props.educationState.degree} index={this.props.index} name="degree" placeholder="Degree" type="text" onChange={this.changeAppState}></input>
        <input value={this.props.educationState.index} index={this.props.index} name="subject" placeholder="Subject" type="text" onChange={this.changeAppState}></input>
        <input value={this.props.educationState.from} index={this.props.index} name="from" placeholder="From" type="text" onChange={this.changeAppState}></input>
        <input value={this.props.educationState.to} index={this.props.index} name="to" placeholder="To" type="text" onChange={this.changeAppState}></input>
      </form>
    )
  }

}