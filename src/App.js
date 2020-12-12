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
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <meta name="description" content="A showcase of Simon's projects and blogs." />
                <meta property="og:image" content="%PUBLIC_URL%/logo192.png" />
                <link rel="icon" type="image/png" href="favicon-32x32.png" />
                <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
                <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
                <title>simonmcurran</title>
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
