import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(() => ({
  icons: {
    width: '30px',
    margin: '0 auto',
  },
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
    marginTop: '3%',
  },
  
}));

function DevIcons({iconList}) {
  const classes = useStyles();

  const listItems = iconList.map(icon => (

    <ListItem key={icon} sm={4}>
      <Grid xs={4} item>
        <Grid container item direction="column" justify="center" alignItems="center" xs>
          <img className={classes.icons} src={`images/devIcons/${icon.toLowerCase()}-plain.svg`} alt={`${icon}-icon`}/>
          <Typography variant="subtitle2">{icon}</Typography>
        </Grid>
      </Grid>
    </ListItem>
  ))

  return (
    <List className={classes.flexContainer}>
      {listItems}
    </List>
  )

}

export default DevIcons;