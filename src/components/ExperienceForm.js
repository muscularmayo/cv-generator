import React from 'react';

export default function ExperienceForm (props) {
  const changeAppState = (event) => {
    props.handleChange(event.target.value, event.target.name, props.index)
  }

  return (
    <form onSubmit={props.onSubmit}>
      <input value={props.experienceState.position} index={props.index} name="position" placeholder="Position" type="text" onChange={changeAppState}/>
      <input value={props.experienceState.company} index={props.index} name="company" placeholder="Company" type="text" onChange={changeAppState}/>
      <input value={props.experienceState.city} index={props.index} name="city" placeholder="City" type="text" onChange={changeAppState}/>
      <input value={props.experienceState.from} index={props.index} name="from" placeholder="From" type="text" onChange={changeAppState}/>
      <input value={props.experienceState.to} index={props.index} name="to" placeholder="To" type="text" onChange={changeAppState}/>
      <input value={props.experienceState.description} index={props.index} name="description" placeholder="Description" type="text" onChange={changeAppState}/>
    </form>
  )
}

// export default class ExperienceForm extends Component {
//   constructor(props){
//     super(props)

//     this.changeAppState = this.changeAppState.bind(this)
//   }

//   changeAppState(event) {
//     //this.props.index = index
//     //event.target.value = info
//     //event.target.name = name
//     this.props.handleChange(event.target.value, event.target.name, this.props.index)
//   }

//   render() {
//     return (
//       <form onSubmit={this.props.onSubmit}>
//         <input value={this.props.experienceState.position} index={this.props.index} name="position" placeholder="Position" type="text" onChange={this.changeAppState}></input>
//         <input value={this.props.experienceState.company} index={this.props.index} name="company" placeholder="Company" type="text" onChange={this.changeAppState}></input>
//         <input value={this.props.experienceState.city} index={this.props.index} name="city" placeholder="City" type="text" onChange={this.changeAppState}></input>
//         <input value={this.props.experienceState.from} index={this.props.index} name="from" placeholder="From" type="text" onChange={this.changeAppState}></input>
//         <input value={this.props.experienceState.to} index={this.props.index} name="to" placeholder="To" type="text" onChange={this.changeAppState}></input>
//         <input value={this.props.experienceState.description} index={this.props.index} name="description" placeholder="Job Description" type="text" onChange={this.changeAppState}></input>
//       </form>
//     )
//   }

// }