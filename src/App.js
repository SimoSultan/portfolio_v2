import React from "react"
import {
    Home,
    Blogs,
    Projects,
    Arrow,
    Navigation,
} from "./library/components/exports"
import {
    createTheme,
    responsiveFontSizes,
    ThemeProvider,
} from "@mui/material/styles"

import "./styles/App.css"

function App() {
    let theme = createTheme()
    theme = responsiveFontSizes(theme)
    console.log({ theme })

    return (
        <ThemeProvider theme={theme}>
            <Navigation />
            <Home />
            <Projects />
            <Blogs />
            <Arrow />
        </ThemeProvider>
    )
}

export default App
