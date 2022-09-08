import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Projects from './components/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner></Banner>
      <Projects></Projects>
    </div>
  );
}

export default App;
