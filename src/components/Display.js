import React, { Component } from 'react';

export default class Display extends Component {
  // this will contain all the info that's gonnab e input, all dependent on props being passed in
  render() {
    const data = this.props.data
    return (
      <div>
        <div id="name">Name: {data.name}</div>
        <div id="job-title">Job Title: {data.jobTitle}</div>
        <div id="photo">Photo: {data.photo}</div>
        <div id="address">Address: {data.address}</div>
        <div id="phone-number">Phone Number: {data.phoneNumber}</div>
        <div id="email">Email: {data.email} </div>
        <div id="biography">Biography: {data.biography} </div>
      </div>
    )
  }

}