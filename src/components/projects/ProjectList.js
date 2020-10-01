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
import { makeStyles } from '@material-ui/core/styles';

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
    paddingTop: '6%',
    paddingBottom: '6%',
    height: '100%'
  },
  iconList: {
    height: 'max-content'
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
  }
}));


function ProjectList() {
  const classes = useStyles();


  const listItems = projectList.map(p => (

    <ListItem key={p.name} className={classes.listItem}>
      <Grid container spacing={3} direction={(p.id % 2 === 0) ? "row" : "row-reverse"} justify ="center" alignItems="center">

        <Grid item xs={5}>
          <Paper className={classes.paper}>

            <Grid container direction="row">

              <Grid item xs={9}>
                {/* NAME AND LOGO IMAGE */}
                <Grid container item direction="row">
                  {/* <Typography variant="h3" className={classes.appHeader}>{p.name}</Typography>
                  <img className={classes.logo} src={p.logo} alt="logo"/> */}
                  <Grid item xs={4}><img className={classes.logo} src={p.logo} alt="logo"/></Grid>
                  <Grid item xs={8}><Typography variant="h4" className={classes.appHeader}>{p.name}</Typography></Grid>
                </Grid>

                <Grid container item direction="column" justify="flex-start" alignItems="flex-start">
                  <Typography className={classes.appDescriptions}>{p.what}</Typography>
                  <Typography className={classes.appDescriptions}>{p.why}</Typography>
                </Grid>
                <Grid container direction="row" justify="flex-start" style={{ paddingTop: '4%' }}>
                  <Button href={p.deployed} color="primary" target="_blank" style={{ cursor: 'pointer' }}>DEMO</Button>
                  <Button href={p.github} color="primary" target="_blank" style={{ cursor: 'pointer' }}>SOURCE CODE</Button>
                </Grid>


              </Grid>

              <Grid item className={classes.iconList} xs={3} >
                <DevIcons iconList={p.stack}/>
              </Grid>

            </Grid>


          </Paper>
        </Grid>

        <Grid item xs={7}>
          <Paper className={classes.paper}>
            <img className={classes.gif} src={p.gif} alt="app-demo"/>
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