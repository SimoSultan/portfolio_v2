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
    width: '50%'
  },
  gif: {
    width: '100%',
    padding: '0',
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  listItem: {
    height: '100%',
    marginBottom: '12%',
    "&:last-child": {
      marginBottom: '2%',
    }
  },
  iconList: {
    height: 'max-content',
    width: '100%'
  },
  appHeader: {
    width: 'max-content',
    maxWidth: '90%',
    fontWeight: 'bold',
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

        <Grid item container xs={12} sm={8} md={5} justify ="center" alignItems="center">
          <Paper className={classes.paper}>
            <MuiThemeProvider theme={theme}>

              <Grid item container>
                <Grid item container xs={4} justify="center" alignItems="center">
                  <img className={classes.logo} src={p.logo} alt="logo"/>
                </Grid>

                <Grid item container xs={8} justify="flex-start" alignItems="center">
                  <Typography variant="h4" className={classes.appHeader}>{p.name}</Typography>
                </Grid>
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

            </MuiThemeProvider>
          </Paper>
        </Grid>

        <Grid xs={12} sm={9} md={7}>
          <Paper>
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