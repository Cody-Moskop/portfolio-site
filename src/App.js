import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import Projects from './Projects.js'; 
import Articles from './Articles.js'; 
import About from './About.js'; 

function App() {
  return (
    <div className="App">
      <div className="navigation">
        <div className="navigation-sub">
          <a href="" className="item">Projects</a>
          <a href="" className="item">Articles</a>
          <a href="" className="item">About</a>
        </div>
      </div>
    </div>
  );
}
 
export default App;
