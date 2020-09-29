import React from 'react';
import { projectList } from  './projectList.json';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  logo: {
    width: '20%'
  },
  gif: {
    width: '50%'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  listItem: {
    paddingTop: '5%',
    paddingBottom: '5%'
  }
}));


function ProjectList() {
  const classes = useStyles();


  const listItems = projectList.map(p => (

    <ListItem key={p.name} className={classes.listItem}>
      <Grid container spacing={3} direction={(p.id % 2 === 0) ? "row" : "row-reverse"} justify ="center" alignItems="center">
        <Grid item xs={5}>
          <Paper className={classes.paper}>
            <Grid container>
              <Grid item>
                <Typography variant="h3">{p.name}</Typography>
              </Grid>
              <Grid item>
                <img className={classes.logo} src={p.logo} alt="logo"/>
              </Grid>
            </Grid>
            <ListItemText primary={p.description} justify="flex-start"/>
            <ListItemText primary={p.what} justify="flex-start"/>
            <ListItemText primary={p.why} justify="flex-start"/>
            <ListItemText primary={p.stack} justify="flex-start"/>
            <Button href={p.deployed} color="primary" target="_blank" >DEMO</Button>
            <Button href={p.github} color="primary" target="_blank">SOURCE CODE</Button>
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