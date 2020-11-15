import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, responsiveFontSizes, ThemeProvider, MuiThemeProvider, makeStyles } from '@material-ui/core/styles';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

let aboutMeFont = createMuiTheme({
  typography: {
    fontFamily: 'PT Sans Narrow',
  },
});
aboutMeFont = responsiveFontSizes(aboutMeFont);

const useStyles = makeStyles(() => ({
    paper: {
        textAlign: 'justify',
        color: theme.palette.text.secondary,
        padding: theme.spacing(3),
    },
    buttonClass: {
        color: '#F2511B',
    }
}));


function AboutMe({hideAboutMeText, buttonFont}) {

  const classes = useStyles(theme)

  return (
    <Container>
      <Box zIndex="modal">
        <Grid container>
          <Paper className={classes.paper}>
            <MuiThemeProvider theme={theme}>
              <ThemeProvider theme={aboutMeFont}>
                <Typography variant="body1" gutterBottom>
                  <strong>Why did I become a developer you ask?</strong> Easy! For the creativity and problem solving. Coding is like a Maxibon for me, being better than the sum of its parts, where those parts are creativity and problem solving. I love the highs, learn from the lows and love the community and diversity surrounding tech. Which is why I enjoy attending meetups such as Brisbane Tech Newbies and BrisJS.I consider myself extremely lucky to have found my passion in life so young, where I can grow and learn, all whilst helping others.
                  <br></br>
                  Check out my work on <strong><a href="https://github.com/SimoSultan">GitHub.</a></strong>
                </Typography>
                <Typography variant="body2">
                    Get my CV <strong><a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1XZXNrNisou74rIXNXF-92RCv6nPwQhk6/view?usp=sharing">HERE</a></strong>
                </Typography>
              </ThemeProvider>
              
              <Grid container direction="row" justify="flex-end" alignItems="center">
                <ThemeProvider theme={buttonFont}>
                  <Button onClick={hideAboutMeText}>
                    <Typography variant="h5" gutterBottom className={classes.buttonClass}>
                      ok!
                    </Typography>
                  </Button>
                </ThemeProvider>
              </Grid>
            </MuiThemeProvider>
          </Paper>
        </Grid>
      </Box>
    </Container>
  );
}

export default AboutMe;