import React, { Component } from 'react';
import { freeImageHostApi }from '../api_keys.js'

export default class Photo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedFile: '',
      isSelected: false,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmission = this.handleSubmission.bind(this)
  }

  handleSubmission () {
    const formData = new FormData();

		formData.append('File', this.state.selectedFile);

		fetch(
			`https://freeimage.host/api/1/upload?key=${freeImageHostApi}`,
			{
				method: 'POST',
				body: formData,
			}
		)
			.then((response) => response.json())
			.then((result) => {
				console.log('Success:', result);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	};

  handleChange (event) {
    this.props.changeAppState(this.props.info, event.target.value)
    this.setState({selectedFile: event.target.files[0]})
    this.setState({isSelected: true})
  }

  render() {
    return (
      <div>
          <input type="file" name="photo" alt="photo" onChange={this.handleChange}/>
          <div>
            <button onClick={this.handleSubmission}>Submit</button>
          </div>
      </div>
    );
  }
}