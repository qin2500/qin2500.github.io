import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Experience from './components/Experience';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner></Banner>
      <Experience></Experience>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  );
}

export default App;
