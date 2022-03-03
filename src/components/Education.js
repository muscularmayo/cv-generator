import React, { Component } from 'react';
import EducationForm from './EducationForm'

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

  handleChange (info, name, index) {
    const educationObject = {
      university: '',
      city: '',
      degree: '',
      subject: '',
      from: '',
      to: '',
    }
    if(name && info) {
      educationObject[name] = info;
    }

    this.props.handleEducationChange(educationObject, index)
  }

  addEducation (event) {
    // we will add another object here
    const newCount = this.state.count + 1
    this.handleChange(null,null, this.state.count)
    this.setState({count: newCount})

    event.preventDefault();
  }

  deleteEducation(event) {
    const newCount = this.state.count - 1;
    this.setState({count: newCount})
    //event.target.id to get the key and then slice to get just the number...
    //event.target.id.slice(0,1)
    event.preventDefault();

  }

  render() {
    let x = []
    x.push(<div key="education-header">Education: </div>);
    for(let i = 0; i < this.state.count; i++) {
      x.push(
        <div id={'education' + i} key={'education' + i}>
          <EducationForm handleChange={this.handleChange} index={i} />
          {/* <form onSubmit={this.props.onSubmit}>
            <input name="university" id={i} onChange={this.handleChange} value={this.props.educationState.university}placeholder="University name" type="text"></input>
            <input index={i} name="city" placeholder="City" type="text"></input>
            <input index={i} name="degree" placeholder="Degree" type="text"></input>
            <input index={i} name="subject" placeholder="Subject" type="text"></input>
            <input index={i} name="from" placeholder="From" type="text"></input>
            <input index={i} name="to" placeholder="To" type="text"></input>
          </form> */}
          <button id={i + 'del'} onClick={this.deleteEducation}>Delete</button>
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