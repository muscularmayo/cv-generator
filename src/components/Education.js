import React, { Component } from 'react';

export default class Education extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 1
    }
    this.handleChange = this.handleChange.bind(this)
    this.addEducation = this.addEducation.bind(this)
    this.deleteEducation = this.deleteEducation.bind(this)
  }

  handleChange (event) {
    const educationObject = {
      university: '',
      city: '',
      degree: '',
      subject: '',
      from: '',
      to: '',
    }

    this.props.handleEducationChange(educationObject)
  }

  addEducation (event) {
    // we will add another object here
    const newCount = this.state.count + 1
    this.setState({count: newCount})
    event.preventDefault();
  }

  deleteEducation(event) {
    const newCount = this.state.count - 1;
    this.setState({count: newCount})
    //event.target.id to get the key and then slice to get just the number...
    event.preventDefault();
  }

  render() {
    let x = []
    x.push(<div key="education-header">Education: </div>);
    for(let i = 0; i < this.state.count; i++) {
      x.push(
        <div id={'education' + i} key={'education' + i}>
          <form onSubmit={this.props.onSubmit}>
            <input  name="university" id={i} onChange={this.handleChange} value={this.props.educationState.university}placeholder="University name" type="text"></input>
            <input index={i} name="city" placeholder="City" type="text"></input>
            <input index={i} name="degree" placeholder="Degree" type="text"></input>
            <input index={i} name="subject" placeholder="Subject" type="text"></input>
            <input index={i} name="from" placeholder="From" type="text"></input>
            <input index={i} name="to" placeholder="To" type="text"></input>
          <button index={i} onClick={this.deleteEducation}>Delete</button>
        </form>
        </div>
      )
    }
    x.push(<button key="addButton" onClick={this.addEducation}>Add</button>);
    return x;

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