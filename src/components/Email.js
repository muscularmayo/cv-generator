import React from 'react';

// export default class Email extends Component {
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
//           <input placeholder="Email address" type="text" value={this.props.value}  onChange={this.handleChange}/>
//       </form>
//     );
//   }

// }

export default function Email (props) {
  const handleChange = (event) => {
    props.changeAppState(props.info, event.target.value)
  }

  return (
    <form onSubmit={props.onSubmit}>
      <input placeholder="Email Address" type="text" value={props.value} onChange={handleChange}/>
    </form>
  )
}