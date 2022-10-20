import React from "react";
import {
  Home,
  Blogs,
  Projects,
  Arrow,
  Navigation,
} from "./library/components/exports";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";

import { PORTFOLIO_THEME } from "./styles/theme";
import "./styles/App.css";

function App() {
  let theme = createTheme(PORTFOLIO_THEME);
  console.log({ theme });
  theme = responsiveFontSizes(theme);

  return (
    <ThemeProvider theme={theme}>
      <Navigation />
      <Home />
      <Projects />
      <Blogs />
      <Arrow />
    </ThemeProvider>
  );
}

export default App;
