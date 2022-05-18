import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from '/Users/alanlee/Desktop/CS program/Web learning/React website/react-website-yt-1/src/components/pages/Home.js';
// import { BrowserRouter as Router} from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={< Home />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;