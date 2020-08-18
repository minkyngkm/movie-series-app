import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Landing from './components/home/Landing';
// import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      {/* <Footer></Footer> */}
      <Landing></Landing>
    </div>
  );
}

export default App;
