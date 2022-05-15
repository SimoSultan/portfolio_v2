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

let theme = createTheme()
theme = responsiveFontSizes(theme)

function App() {
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
