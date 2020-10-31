import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Form from './components/Form'
// import Navbar from './components/Navebar'
import PersistentDrawerLeft from './components/MaterialNavbar'



function App() {
  return (
    <div className="container-fluid">
      {/* <Navbar/>
      <Form/> */}
      <PersistentDrawerLeft/>
    </div>
  );
}

export default App;
