import React from 'react'

import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
    link: {
        color: '#f5a651',
        textDecoration: 'none'
    },
    copyrightCont: {
        color: '#d8d8d8',
        fontFamily: 'Raleway, sans-serif',
        marginBottom: '1%',
    }
}));


function Copyright() {
    const classes = useStyles();
    return (
        <Typography variant="body2" color="textSecondary" align="center" className={classes.copyrightCont}>

            {'Copyright © '}

            <Link 
                href="https://simosultan.netlify.app/" 
                className={classes.link}
                target="_blank"
                rel="noopener noreferrer"
            >

                Simon Curran

            </Link>

            {' '}

            {new Date().getFullYear()}

            {'.'}

        </Typography>
    )
}

export default Copyright
