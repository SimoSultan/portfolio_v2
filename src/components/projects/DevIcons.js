import React from 'react';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import { useMediaQuery } from 'react-responsive'

const useStyles = makeStyles(() => ({
  icons: {
    width: '40px',
    margin: '0 auto',
  },
  flexContainer: {
    display: 'flex',
    // flex: 'row',
    padding: 0,
    marginTop: '3%',
  },
  iconText: {
    letterSpacing: '1px',
    lineHeight: '1rem',
    marginTop: '3%',
  },
  devIconList: {
      margin: '3% auto',
  }
  
}));

function DevIcons({ iconList }) {
    const classes = useStyles();
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1024px)' })

    const listItems = iconList.map(icon => (

        <Grid item container direction="row" xs={isDesktopOrLaptop ? 3 : 6}>

            <Grid item container direction="column">

                <img className={classes.icons} src={`images/devIcons/${icon.toLowerCase()}-plain.svg`} alt={`${icon}-icon`}/>

                <Typography variant="subtitle2" className={classes.iconText}>

                    {icon}

                </Typography>

            </Grid>

        </Grid>
        
    ))

    return (

        <Grid item container xs direction="row" spacing={2} className={classes.devIconList} justify="center">
            
            {listItems}
    
        </Grid>

    )

}

export default DevIcons;