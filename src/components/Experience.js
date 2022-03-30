import React, { useState } from 'react';
import ExperienceForm from './ExperienceForm.js';
import Delete from './Delete.js';

export default function Experience (props) {
  const [count, setCount] = useState(1)

  const handleChange = (info, name, index) => {
    let experienceObject;
    if(props.experienceState[index]) {
      experienceObject = {...props.experienceState[index]}
    } else {
      experienceObject = {
        position: '',
        company: '',
        city: '',
        from: '',
        to: '',
        description: '',
      }
    }
    experienceObject[name] = info;

    props.handleExperienceChange(experienceObject, index)
  }

  const addExperience = (event) => {
    // we will add another object here
    const newCount = count + 1
    handleChange(null,null, count)
    setCount(newCount)
    event.preventDefault();
  }

  const deleteExperience = (index) => {
    const newCount = this.state.count - 1;
    setCount(newCount)
    props.handleExperienceChange(null, index, true)
  }

  let x = []
  x.push(<div key="experience-header">Experience </div>);
  for(let i = 0; i < count; i++) {
    x.push(
      <div id={'experience' + i} key={'experience' + i}>
        <ExperienceForm experienceState={props.experienceState[i]} handleChange={handleChange} index={i} />
        {/* <form onSubmit={this.props.onSubmit}>
          <input name="university" id={i} onChange={this.handleChange} value={this.props.educationState.university}placeholder="University name" type="text"></input>
          <input index={i} name="city" placeholder="City" type="text"></input>
          <input index={i} name="degree" placeholder="Degree" type="text"></input>
          <input index={i} name="subject" placeholder="Subject" type="text"></input>
          <input index={i} name="from" placeholder="From" type="text"></input>
          <input index={i} name="to" placeholder="To" type="text"></input>
        </form> */
        /* <button id={i + 'del'} onClick={this.deleteEducation}>Delete</button> */}
        <Delete experience={true} index={i} deleteExperience={deleteExperience} />
      </div>
    )
  }
  x.push(<button key="addButton" onClick={addExperience}>Add</button>);

  return x;

}
// export default class Experience extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       count: 1
//     }
//     this.handleChange = this.handleChange.bind(this)
//     this.addExperience = this.addExperience.bind(this)
//     this.deleteExperience = this.deleteExperience.bind(this)
//   }

//   handleChange (info, name, index) {
//     let experienceObject;
//     if(this.props.experienceState[index]) {
//       experienceObject = {...this.props.experienceState[index]}
//     } else {
//       experienceObject = {
//         position: '',
//         company: '',
//         city: '',
//         from: '',
//         to: '',
//         description: '',
//       }
//     }


//     experienceObject[name] = info;


//     this.props.handleExperienceChange(experienceObject, index)
//   }

  // addExperience (event) {
  //   // we will add another object here
  //   const newCount = this.state.count + 1
  //   this.handleChange(null,null, this.state.count)
  //   this.setState({count: newCount})

  //   event.preventDefault();
  // }

  // deleteExperience(index) {
  //   const newCount = this.state.count - 1;
  //   this.setState({count: newCount})
  //   //event.target.id to get the key and then slice to get just the number...
  //   //event.target.id.slice(0,1)
  //   this.props.handleExperienceChange(null, index, true)

  // }

//   render() {
    // let x = []
    // x.push(<div key="experience-header">Experience </div>);
    // for(let i = 0; i < this.state.count; i++) {
    //   x.push(
    //     <div id={'experience' + i} key={'experience' + i}>
    //       <ExperienceForm experienceState={this.props.experienceState[i]} handleChange={this.handleChange} index={i} />
    //       {/* <form onSubmit={this.props.onSubmit}>
    //         <input name="university" id={i} onChange={this.handleChange} value={this.props.educationState.university}placeholder="University name" type="text"></input>
    //         <input index={i} name="city" placeholder="City" type="text"></input>
    //         <input index={i} name="degree" placeholder="Degree" type="text"></input>
    //         <input index={i} name="subject" placeholder="Subject" type="text"></input>
    //         <input index={i} name="from" placeholder="From" type="text"></input>
    //         <input index={i} name="to" placeholder="To" type="text"></input>
    //       </form> */
    //       /* <button id={i + 'del'} onClick={this.deleteEducation}>Delete</button> */}
    //       <Delete experience={true} index={i} deleteExperience={this.deleteExperience} />
    //     </div>
    //   )
    // }
    // x.push(<button key="addButton" onClick={this.addExperience}>Add</button>);
//     return x;

//   }

// }
