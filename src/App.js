import React from 'react';
import { Home, Blogs, Projects, Footer, Navigation } from "./components/export";
import './stylesheets/App.css'

function App() {
  return (

    <> 
      <Navigation />
      <Home />
      <Projects />
      <Blogs />
      <Footer style={{zIndex: '300 !important'}} />

    </>

  );
}

export default App;
