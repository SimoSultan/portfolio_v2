import React from 'react';
import { blogList } from  './blogList.json';

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

  img: {
    width: '90%'
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


function BlogList() {
  const classes = useStyles();


  const listItems = blogList.map(b => (

    <ListItem key={b.name} className={classes.listItem}>
      <Grid container spacing={3} direction={(b.id % 2 === 0) ? "row-reverse" : "row"} justify ="center" alignItems="center">
        <Grid item xs={5}>
          <Paper className={classes.paper}>
            <Typography variant="h3">{b.name}</Typography>
            <ListItemText primary={b.description} justify="flex-start"/>
            <Button href={b.link} color="primary" target="_blank" >MEDIUM ARTICLE</Button>
          </Paper>
        </Grid>

        <Grid item xs={7}>
          <Paper className={classes.paper}>
            <img className={classes.img} src={b.img} alt="app-demo"/>
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

export default BlogList;