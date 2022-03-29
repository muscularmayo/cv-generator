import React from 'react';

// export default class PhoneNumber extends Component {
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
//           <input placeholder="Phone number" type="text" value={this.props.value}  onChange={this.handleChange}/>
//       </form>
//     );
//   }

// }

export default function PhoneNumber (props) {
  const handleChange = (event) => {
    props.changeAppState(props.info, event.target.value)
  }

  return (
    <form onSubmit={props.onSubmit}>
      <input placeholder="Phone Number" type="text" value={props.value} onChange={handleChange}/>
    </form>
  )
}