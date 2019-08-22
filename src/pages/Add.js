import React from 'react';
import Add1 from '../components/Add/Add1';
import Header from '../components/Header.js';
import "./Add.css";

class Add extends React.Component {
  render() {
  return (
    <div className="add">
      <Header/>
      <Add1/>
    </div>
  );
}
}

export default Add;