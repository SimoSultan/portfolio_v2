import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, responsiveFontSizes, ThemeProvider, MuiThemeProvider } from '@material-ui/core/styles';
import { Box, Container } from '@material-ui/core';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

let titleFont = createMuiTheme({
  typography: {
    fontFamily: 'Quicksand',
    fontWeight: 500,
    fontSize: 17,
  },
});
titleFont = responsiveFontSizes(titleFont);


function HomeHeader({ showAboutMe, buttonFont, nameTextFirst, nameTextSecond, whoButton }) {

  return (
    <Container>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={titleFont}>
          <Grid container direction="column" justify="center" alignItems="center">
            <Box>
              <Typography ref={nameTextFirst} variant="h1" gutterBottom >
                SIMON
              </Typography>
              <Typography ref={nameTextSecond} variant="h1" gutterBottom>
                CURRAN
              </Typography>
            </Box>
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
    </Container>
  );
}

export default HomeHeader;