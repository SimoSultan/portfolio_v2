import React from 'react'
import DevIcons from './DevIcons';

// Material UI components 
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createMuiTheme, responsiveFontSizes, MuiThemeProvider } from '@material-ui/core/styles';

import Fade from 'react-reveal/Fade';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles((theme) => ({
    logo: {
        width: '50%'
    },
    gif: {
        width: '100%',
        padding: '0',
        overflow: 'hidden',
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
        marginBottom: '5%',
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
    },
    projectsHorizontalWordMobile: {
        marginTop: '-14.5%', 
        opacity: 0.3,
        marginLeft: '8%', 
        position: 'absolute',
    },
    projectsHorizontalWordTabletDesktop: {
        position: 'absolute',
        marginTop: '-10%', 
        opacity: 0.3,
        marginLeft: '20%', 
    },
    gifCont: {
        transition: 'transform 1s',
        "&:hover": {
            transform: 'scale(1.05)',
        }
    }    
}));



function ProjectItem( {project, index} ) {

    const classes = useStyles();

    return (
        <ListItem className={classes.listItem} >

            <Grid container spacing={5} direction={(index % 2 === 0) ? "row" : "row-reverse"} justify ="center" alignItems="center" >

                <Grid item container xs={12} sm={8} md={5} justify="center" alignItems="center">
                    <Fade top>

                    <Paper className={classes.paper}>
                        <MuiThemeProvider theme={theme}>

                        <Grid item container>
                            <Grid item container xs={4} justify="center" alignItems="center">
                                <img className={classes.logo} src={project.logo} alt="logo"/>
                            </Grid>

                            <Grid item container xs={8} justify="flex-start" alignItems="center">
                                <Typography variant="h4" className={classes.appHeader}>
                                    {project.name}
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid container item direction="column" justify="flex-start" alignItems="flex-start">
                            <Typography className={classes.appDescriptions}>
                                {project.what}
                            </Typography>

                            <Typography className={classes.appDescriptions}>
                                {project.why}
                            </Typography>
                        </Grid>

                        <Grid item container direction="row" justify="space-around" alignItems="center" className={classes.iconList} >
                            <DevIcons iconList={project.stack}/>
                        </Grid>

                        <Grid container direction="row" justify="flex-start">
                            <Button href={project.deployed.toString()} color="primary" target="_blank" disabled={project.deployed === false} style={{ cursor: 'pointer' }}>
                                {`DEMO${!project.deployed ? ': n/a' : ''}`}
                            </Button>
                            <Button href={project.github.toString()} color="primary" target="_blank" disabled={project.github === false}  style={{ cursor: 'pointer' }}>
                                {`SOURCE CODE${!project.github ? ': private' : ''}`}
                            </Button>
                        </Grid>

                        </MuiThemeProvider>
                    </Paper>
                    </Fade>
                </Grid>

                <Grid item xs={12} sm={9} md={7}>
                    <Fade left mirror={index % 2 === 0}>
                        <Paper className={classes.gifCont}>
                            <a href={project.deployed.toString()} target="_blank" rel="noopener noreferrer">
                                <img className={classes.gif} src={project.gif} alt="app-demo"/>
                            </a>
                        </Paper>
                    </Fade>
                </Grid>

            </Grid>
        </ListItem>
    )
}

export default ProjectItem
