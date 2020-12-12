import React from 'react';
import { 
    Home, 
    Blogs, 
    Projects, 
    Arrow, 
    Navigation
 } from "./components/export";
import './stylesheets/App.css'


function App() {
  return (

    <div style={{overflow: 'hidden'}}> 

      <Navigation />
      <Home />
      <Projects />
      <Blogs />
      <Arrow />

    </div>

  );
}

export default App;
