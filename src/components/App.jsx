import React from 'react';
import './App.css';

export default class AppWrapper extends React.Component {
  render() {
    return (
      <div className='app-container'>
        {this.props.children}
      </div>
    )
  }
}