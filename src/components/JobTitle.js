import React from 'react';

// export default class JobTitle extends Component {
//   constructor(props) {
//     super(props)

//     this.handleChange = this.handleChange.bind(this)
//   }

//   handleChange (event) {
//     this.props.changeAppState(this.props.info, event.target.value)
//   }

//   render() {
//     return (
//       <form onSubmit={this.props.onSubmit}>

//           <input placeholder="Job Title" type="text" value={this.props.value}  onChange={this.handleChange}/>

//       </form>
//     );
//   }

// }

export default function JobTitle (props) {
  const handleChange = (event) => {
    props.changeAppState(props.info, event.target.value)
  }

  return (
    <form onSubmit={props.onSubmit}>
      <input placeholder="Job Title" type="text" value={props.value} onChange={handleChange}/>
    </form>
  )
}