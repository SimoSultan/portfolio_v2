import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, responsiveFontSizes, ThemeProvider, MuiThemeProvider } from '@material-ui/core/styles';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

let titleFont = createMuiTheme({
  typography: {
    fontFamily: 'Quicksand',
    fontWeight: 600,
    fontSize: 18,
  },
});

titleFont = responsiveFontSizes(titleFont);

function HomeHeader({ showAboutMe, buttonFont, nameTextFirst, nameTextSecond, whoButton, toggleTimeline }) {

  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={titleFont}>
        <Grid direction="column" justify="flex-start" alignItems="center">
          <Typography ref={nameTextFirst} style={{fontWeight: 500, textAlign:"left"}} variant="h1" gutterBottom>
            SIMON
          </Typography>
          <Typography ref={nameTextSecond} style={{fontWeight: 500, textAlign:"left"}} variant="h1" gutterBottom>
            CURRAN
          </Typography>
        </Grid>
      </ThemeProvider>

      <Grid container direction="row" justify="flex-end" alignItems="center">
        <ThemeProvider theme={buttonFont}>
          <Button onClick={() => {showAboutMe(); toggleTimeline()}}>
            <Typography ref={whoButton} variant="h5" gutterBottom>
              who?
            </Typography>
          </Button>
        </ThemeProvider>
      </Grid>

    </MuiThemeProvider>
  );
}

export default HomeHeader;