import React from 'react';
import { projectList } from  './projectList.json';
import DevIcons from './DevIcons';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createMuiTheme, responsiveFontSizes, MuiThemeProvider } from '@material-ui/core/styles';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles((theme) => ({
  logo: {
    // marginLeft: '10%',
    width: '50%'
  },
  gif: {
    width: '100%'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  listItem: {
    padding: '6% 0',
    // paddingBottom: '6%',
    height: '100%',
    marginBottom: '9%',
    "&:last-child": {
      marginBottom: '0',
    }
  },
  iconList: {
    height: 'max-content',
    width: '100%'
  },
  buttonContainer: {
    paddingTop: '10%',
  },
  appHeader: {
    width: 'max-content',
    maxWidth: '90%'
  },
  appDescriptions: {
    textAlign: 'left',
    paddingTop: '3%'
  },
  root: {
    paddingLeft: '8px',
    paddingRight: '8px'
  }
  
}));


function ProjectList() {
  const classes = useStyles();


  const listItems = projectList.map(p => (

    <ListItem key={p.name} className={classes.listItem}>
      <Grid container spacing={3} direction={(p.id % 2 === 0) ? "row" : "row-reverse"} justify ="center" alignItems="center">

        <Grid item style={{ padding: 0 }} xs={12}>
          <Paper className={classes.paper}>
            <MuiThemeProvider theme={theme}>

            <Grid direction="row">

              <Grid item xs={12}>
                {/* NAME AND LOGO IMAGE */}
                <Grid item container direction="row">
                  {/* <Typography variant="h3" className={classes.appHeader}>{p.name}</Typography>
                  <img className={classes.logo} src={p.logo} alt="logo"/> */}
                  <Grid xs={4} container justify="center" alignItems="center"><img className={classes.logo} src={p.logo} alt="logo"/></Grid>
                  <Grid xs={8} container justify="flex-start" alignItems="center"><Typography variant="h4" className={classes.appHeader}>{p.name}</Typography></Grid>
                </Grid>

                <Grid item direction="column" justify="flex-start" alignItems="flex-start">
                  <Typography className={classes.appDescriptions}>{p.what}</Typography>
                  <Typography className={classes.appDescriptions}>{p.why}</Typography>
                </Grid>

                <Grid item container direction="row" justify="space-around" alignItems="center" className={classes.iconList} >
                  <DevIcons iconList={p.stack}/>
                </Grid>

                <Grid container direction="row" justify="flex-start">
                  <Button href={p.deployed} color="primary" target="_blank" style={{ cursor: 'pointer' }}>DEMO</Button>
                  <Button href={p.github} color="primary" target="_blank" style={{ cursor: 'pointer' }}>SOURCE CODE</Button>
                </Grid>


              </Grid>

            </Grid>

            </MuiThemeProvider>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <a href={p.deployed} target="_blank" rel="noopener noreferrer"><img className={classes.gif} src={p.gif} alt="app-demo"/></a>
          </Paper>
        </Grid>

      </Grid>
    </ListItem>

  ))

  return (
    <Container>
      <List>
        {listItems}
      </List>
    </Container>
  )

}

export default ProjectList;