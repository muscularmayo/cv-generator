import React, { useState } from 'react';
import EducationForm from './EducationForm';
import Delete from './Delete.js';

export default function Education (props) {

  const [count, setCount] = useState(1)


  const handleChange = (info, name, index) => {
    let educationObject;
    if(props.educationState[index]) {
      educationObject = {...props.educationState[index]}
    } else {
      educationObject = {
        university: '',
        city: '',
        degree: '',
        subject: '',
        from: '',
        to: '',
      }
    }
    educationObject[name] = info;

    props.handleEducationChange(educationObject, index)
  }

  const addEducation = (event) => {
    // const newCount = this.state.count + 1
    // this.handleChange(null,null, this.state.count)
    // this.setState({count: newCount})
    // event.preventDefault();
    const newCount = count + 1
    handleChange(null, null, count)
    setCount(newCount)
    event.preventDefault();

  }

  const deleteEducation = (index) => {
    // const newCount = this.state.count - 1;
    // this.setState({count: newCount})
    // //event.target.id to get the key and then slice to get just the number...
    // //event.target.id.slice(0,1)
    // this.props.handleEducationChange(null, index, true)
    const newCount = count - 1;
    setCount(newCount)
    props.handleEducationChange(null, index, true)
  }

  let x = []
  x.push(<div key="education-header">Education </div>);
  for(let i = 0; i < count; i++) {
    x.push(
      <div id={'education' + i} key={'education' + i}>
        <EducationForm educationState={props.educationState[i]} handleChange={handleChange} index={i} />
        {/* <form onSubmit={this.props.onSubmit}>
          <input name="university" id={i} onChange={this.handleChange} value={this.props.educationState.university}placeholder="University name" type="text"></input>
          <input index={i} name="city" placeholder="City" type="text"></input>
          <input index={i} name="degree" placeholder="Degree" type="text"></input>
          <input index={i} name="subject" placeholder="Subject" type="text"></input>
          <input index={i} name="from" placeholder="From" type="text"></input>
          <input index={i} name="to" placeholder="To" type="text"></input>
        </form> */
        /* <button id={i + 'del'} onClick={this.deleteEducation}>Delete</button> */}
        <Delete education={true} index={i} deleteEducation={deleteEducation} />
      </div>
    )
  }
    x.push(<button key="addButton" onClick={addEducation}>Add</button>);

  return x;

}

// export default class Education extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       count: 1
//     }
//     this.handleChange = this.handleChange.bind(this)
//     this.addEducation = this.addEducation.bind(this)
//     this.deleteEducation = this.deleteEducation.bind(this)
//   }

//   handleChange (info, name, index) {
//     let educationObject;
//     if(this.props.educationState[index]) {
//       educationObject = {...this.props.educationState[index]}
//     } else {
//       educationObject = {
//         university: '',
//         city: '',
//         degree: '',
//         subject: '',
//         from: '',
//         to: '',
//       }
//     }

//     educationObject[name] = info;

//     this.props.handleEducationChange(educationObject, index)
//   }

//   addEducation (event) {
//     // we will add another object here
//     const newCount = this.state.count + 1
//     this.handleChange(null,null, this.state.count)
//     this.setState({count: newCount})

//     event.preventDefault();
//   }

//   deleteEducation(index) {
//     const newCount = this.state.count - 1;
//     this.setState({count: newCount})
//     //event.target.id to get the key and then slice to get just the number...
//     //event.target.id.slice(0,1)
//     this.props.handleEducationChange(null, index, true)

//   }

//   render() {
//     let x = []
//     x.push(<div key="education-header">Education </div>);
//     for(let i = 0; i < this.state.count; i++) {
//       x.push(
//         <div id={'education' + i} key={'education' + i}>
//           <EducationForm educationState={this.props.educationState[i]} handleChange={this.handleChange} index={i} />
//           {/* <form onSubmit={this.props.onSubmit}>
//             <input name="university" id={i} onChange={this.handleChange} value={this.props.educationState.university}placeholder="University name" type="text"></input>
//             <input index={i} name="city" placeholder="City" type="text"></input>
//             <input index={i} name="degree" placeholder="Degree" type="text"></input>
//             <input index={i} name="subject" placeholder="Subject" type="text"></input>
//             <input index={i} name="from" placeholder="From" type="text"></input>
//             <input index={i} name="to" placeholder="To" type="text"></input>
//           </form> */
//           /* <button id={i + 'del'} onClick={this.deleteEducation}>Delete</button> */}
//           <Delete education={true} index={i} deleteEducation={this.deleteEducation} />
//         </div>
//       )
//     }
//     x.push(<button key="addButton" onClick={this.addEducation}>Add</button>);
//     return x;

//   }


// }