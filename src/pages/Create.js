import React from 'react';
import Create1 from '../components/Create/Create1';
import Header from '../components/Header.js';
import "./Create.css";

class Create extends React.Component {
  render() {
  return (
    <div className="create">
      <Header/>
      <Create1/>
    </div>
  );
}
}

export default Create;