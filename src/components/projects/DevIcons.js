import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(() => ({
  icons: {
    width: '100%'
  },
  listItem: {
    width: '70%',
    margin: '0 auto'
  }
  
}));

function DevIcons({iconList}) {
  const classes = useStyles();

  const listItems = iconList.map(icon => (

    <ListItem key={icon} className={classes.listItem}>
      <Grid container direction="column">
          {/* <Grid item><img className={classes.icons} src={`images/devIcons/${icon.toLowerCase()}-plain.svg`} alt={`${icon}-icon`}/></Grid>
          <Grid item><Typography variant="subtitle2" style={{ textAlign: 'center' }}>{icon}</Typography></Grid> */}
          <img className={classes.icons} src={`images/devIcons/${icon.toLowerCase()}-plain.svg`} alt={`${icon}-icon`}/>
          <Typography variant="subtitle2" style={{ textAlign: 'center' }}>{icon}</Typography>
      </Grid>
    </ListItem>
  ))

  return (
    <List>
      {listItems}
    </List>
  )

}

export default DevIcons;