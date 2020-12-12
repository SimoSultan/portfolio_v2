import React from 'react';

import { 
    Home, 
    Blogs, 
    Projects, 
    Arrow, 
    Navigation,
} from "./components/export";

import './stylesheets/App.css'



function App() {
    
    return (

        <>

            <Navigation />
            <Home />
            <Projects />
            <Blogs />
            <Arrow />

        </>

    );
}

export default App;
