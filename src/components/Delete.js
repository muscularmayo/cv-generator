import React from 'react';

// export default class Delete extends Component {
//   constructor(props) {
//     super(props)

//     this.handleClick = this.handleClick.bind(this)
//   }

//   handleClick(event) {
//     //this.props.index = index
//     if(this.props.education) {
//       this.props.deleteEducation(this.props.index)
//     } else if (this.props.experience) {
//       this.props.deleteExperience(this.props.index)
//     }
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <button onClick={this.handleClick}>Delete</button>
//     );
//   }

// }

export default function Delete (props) {
  const handleClick = (event) => {
    if(props.education) {
      props.deleteEducation(props.index)
    } else if (props.experience) {
      props.deleteExperience(props.index)
    }
    event.preventDefault();
  }

  return (
    <button onClick={handleClick}>Delete</button>
  )
}