import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, responsiveFontSizes, ThemeProvider, MuiThemeProvider } from '@material-ui/core/styles';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

let whoFont = createMuiTheme({
  typography: {
    fontFamily: 'Roboto Slab',
  },
})

let titleFont = createMuiTheme({
  typography: {
    fontFamily: 'Quicksand',
    fontWeight: 600,
    fontSize: 18,
  },
});

titleFont = responsiveFontSizes(titleFont);
whoFont = responsiveFontSizes(whoFont);

function HomeHeader({nameText, showHideAboutMeText}) {

  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={titleFont}>
        <Typography ref={nameText} style={{fontWeight: 500}} variant="h1" gutterBottom>
          SIMON
          CURRAN
        </Typography>
      </ThemeProvider>

      <ThemeProvider theme={whoFont}>
        <Button textAlign="right" onClick={showHideAboutMeText}>
          <Typography variant="h5" gutterBottom>
            who?
          </Typography>
        </Button>
      </ThemeProvider>
    </MuiThemeProvider>
  );
}

export default HomeHeader;