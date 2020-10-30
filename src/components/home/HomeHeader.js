import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, responsiveFontSizes, ThemeProvider, MuiThemeProvider, makeStyles } from '@material-ui/core/styles';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

let titleFont = createMuiTheme({
  typography: {
    fontFamily: 'Quicksand',
    fontWeight: 500,
    fontSize: 18,
  },
});
titleFont = responsiveFontSizes(titleFont);

const useStyles = makeStyles(() => ({
  firstName: {
    fontSize: '4rem',
    // fontWeight: 400, 
    // textAlign: "left"
  },
  lastName: {
    fontSize: '4rem',
    // fontWeight: 400, 
    // textAlign: "left"
  },
}));

function HomeHeader({ showAboutMe, buttonFont, nameTextFirst, nameTextSecond, whoButton }) {
  const classes = useStyles()

  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={titleFont}>
        <Grid direction="column" justify="flex-start" alignItems="center">
          <Typography ref={nameTextFirst} className={classes.firstName} variant="h1" gutterBottom>
            SIMON
          </Typography>
          <Typography ref={nameTextSecond} className={classes.lastName} variant="h1" gutterBottom>
            CURRAN
          </Typography>
        </Grid>
      </ThemeProvider>

      <Grid container direction="row" justify="flex-end" alignItems="center">
        <ThemeProvider theme={buttonFont}>
          <Button onClick={showAboutMe}>
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