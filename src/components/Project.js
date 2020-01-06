import React from 'react';

const Project = (props) => {

  if (props.project[0]){
  return (
    <div>
      <div>Project Name: {props.project[0].name}</div>
      <div>Days Left: {props.project[0].days_left}</div>
    </div>
  )}
  else {
    return null
  }
}

export default Project
