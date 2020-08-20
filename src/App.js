import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Landing from './components/home/Landing';
import { Route, Link} from 'react-router-dom';
import Movie from './components/home/Movie';
// import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="App">
      <Link to="/" className="nav-link"><Navbar></Navbar></Link>
      <Route path="/" exact component={Landing}></Route>
      <Route path="/movie/:id" component={Movie}></Route>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
