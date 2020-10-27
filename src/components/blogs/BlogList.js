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
    width: '100%',
    maxHeight: '500px',
    margin: '0'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  listItem: {
    paddingTop: '5%',
    paddingBottom: '5%',
    height: 'max-content',
  },
  blogImgCard: {
    maxHeight: '500px'
  }
}));


function BlogList() {
  const classes = useStyles();


  const listItems = blogList.map(b => (

    <ListItem key={b.name} className={classes.listItem}>
      <Grid container spacing={3} direction={(b.id % 2 === 0) ? "row-reverse" : "row"} justify ="center" alignItems="center">
        <Grid item xs={5}>
          <Paper className={classes.paper}>
            <Typography variant="h4">{b.name}</Typography>
            <ListItemText primary={b.description} justify="flex-start"/>
            <Button href={b.link} color="primary" target="_blank" >Link To Original</Button>
          </Paper>
        </Grid>

        <Grid item xs={7} className={classes.blogImgCard}>
          <Paper className={classes.paper}>
            <a href={b.link} target="_blank" rel="noopener noreferrer"><img className={classes.img} src={b.img} alt="app-demo"/></a>
          </Paper>
        </Grid>

      </Grid>


      {/* <Grid item style={{ padding: 0 }} xs={12}>
        <Paper className={classes.paper}>
          <MuiThemeProvider theme={theme}>

          <Grid direction="row">

            <Grid item xs={12}>
              <Grid item container direction="row">

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

      </Grid> */}


    </ListItem>



  ))

  return (
    <Container>
      <List>
        {listItems.reverse()}
      </List>
    </Container>
  )

}

export default BlogList;