import React from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, responsiveFontSizes, ThemeProvider, MuiThemeProvider } from '@material-ui/core/styles';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

let aboutMeFont = createMuiTheme({
  typography: {
    fontFamily: 'PT Sans Narrow',
  },
});

aboutMeFont = responsiveFontSizes(aboutMeFont);


function AboutMe({showHideAboutMeText}) {

  return (
    <Paper style={{ textAlign: 'justify', color: theme.palette.text.secondary, padding: theme.spacing(4), position: 'absolute', top: '45%'}}>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={aboutMeFont}>
          <Typography variant="body1" gutterBottom>
            For me, coding is like a Maxibon, being better than the sum of its parts (freedom, creativity, problem solving and teamwork). 
            And when combined, can create something powerful that can better businesses or simply help one another, which is why it's my passion in life.
            Check out my work on <strong><a href="https://github.com/SimoSultan">GitHub.</a></strong>
          </Typography>
        </ThemeProvider>

        <Button textAlign="right" onClick={showHideAboutMeText}>
          <Typography variant="h5" gutterBottom>
            ok?
          </Typography>
        </Button>
      </MuiThemeProvider>
    </Paper>
  );
}

export default AboutMe;