import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Form from './components/Form'
// import Navbar from './components/Navebar'
import PersistentDrawerLeft from './components/MaterialNavbar'
import PrimarySearchAppBar from './components/Navbar'



function App() {
  return (
    <div >
      {/* <Navbar/>
      <Form/> */}
      <PrimarySearchAppBar/>
      
    </div>
  );
}

export default App;
