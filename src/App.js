import React from 'react';
import { 
    Home, 
    Blogs, 
    Projects, 
    // Footer, 
    Navigation
 } from "./components/export";
import './stylesheets/App.css'

import Arrow from './components/other/Arrow'


function App() {
  return (

    <> 

      <Navigation />
      <Home />
      <Projects />
      <Blogs />
      <Arrow />

      {/* <Footer /> */}

    </>

  );
}

export default App;
