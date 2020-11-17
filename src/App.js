import React from 'react';
import { 
    Home, 
    Blogs, 
    Projects, 
    // Footer, 
    Navigation
 } from "./components/export";
import './stylesheets/App.css'

function App() {
  return (

    <> 
      <Navigation />
      <Home />
      <Projects />
      <Blogs />
      {/* <Footer /> */}

    </>

  );
}

export default App;
