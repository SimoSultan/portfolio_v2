import React from 'react';

import { 
    Home, 
    Blogs, 
    Projects, 
    Arrow, 
    Navigation,
} from "./components/export";

import './stylesheets/App.css'

import { Helmet } from "react-helmet";


function App() {
    
    return (

        <>
            <Helmet>
                <meta name="description" content="A showcase of Simon's projects and blogs." />
                <meta property="og:image" content="%PUBLIC_URL%/logo192.png" />
            </Helmet>

            <Navigation />
            <Home />
            <Projects />
            <Blogs />
            <Arrow />

        </>

    );
}

export default App;
