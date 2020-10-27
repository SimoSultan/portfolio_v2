import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
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

function AboutMe({hideAboutMeText, buttonFont, toggleTimeline}) {

  return (
    <Box zIndex="modal">
    <Paper style={{ textAlign: 'justify', color: theme.palette.text.secondary, padding: theme.spacing(3)}}>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={aboutMeFont}>
          <Typography variant="body1" gutterBottom>
            {/* For me, coding is like a Maxibon, being better than the sum of its parts (freedom, creativity, problem solving and teamwork). 
            And when combined, can create something powerful that can better businesses or simply help one another, which is why it's my passion in life.
            Check out my work on <strong><a href="https://github.com/SimoSultan">GitHub.</a></strong> */}
            <strong>Why did I become a developer you ask?</strong> Easy! For the creativity and problem solving. Coding is like a Maxibon for me, being better than the sum of its parts, where those parts are creativity and problem solving. I love the highs, learn from the lows and love the community and diversity surrounding tech. Which is why I enjoy attending meetups such as Brisbane Tech Newbies and BrisJS.I consider myself extremely lucky to have found my passion in life so young, where I can grow and learn, all whilst helping others.
            <br></br>
            Check out my work on <strong><a href="https://github.com/SimoSultan">GitHub.</a></strong>
          </Typography>
        </ThemeProvider>

        <Grid container direction="row" justify="flex-end" alignItems="center">
          <ThemeProvider theme={buttonFont}>
            <Button textAlign="right" onClick={() => {hideAboutMeText(); toggleTimeline()}}>
              <Typography variant="h5" gutterBottom>
                ok!
              </Typography>
            </Button>
          </ThemeProvider>
        </Grid>
      </MuiThemeProvider>
    </Paper>
    </Box>
  );
}

export default AboutMe;