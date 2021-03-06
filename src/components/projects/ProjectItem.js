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
    noGifProvided:{
        background: 'transparent',
        width: 'max-content',
        textDecoration: 'none',
        float: 'left',
        position: 'absolute',
        top: '30%',
        fontSize: '3rem',
        fontFamily: 'raleway',
        marginLeft: '100px'
    },
    paper: {
        padding: theme.spacing(3),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        // margin: '5%',
    },
    listItem: {
        height: '100%',
        marginBottom: '12%',
        "&:last-child": {
            marginBottom: '5%',
        },
    },
    iconList: {
        height: 'max-content',
        width: '100%'
    },
    appHeader: {
        width: 'max-content',
        maxWidth: '90%',
        fontWeight: 'bold',
        fontFamily: 'Raleway, sans-serif',
        color: '#235aa1',

    },
    appDescriptionHeading: {
        paddingTop: '4%',
        marginLeft: '6%',
        color: '#235aa1',
        fontSize: '1.2rem',
        fontFamily: 'Raleway, sans-serif',
        fontWeight: 'bold'
    },
    appDescriptions: {
        textAlign: 'left',
        fontStyle: 'italic',
        // color: '#235aa1',
        fontFamily: 'Quicksand'

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
    },
    projectItemButton: {
        cursor: 'pointer',
        color: '#F2511B',
        letterSpacing: '1px',
        fontFamily: 'Roboto Slab',
        fontSize: '0.9rem',
    },
    projectButtonCont: {
        "&:hover > *:last-child": {
            opacity: 0,
        },
    },
    projectButtonDemo: {
        width: '78%',
        height: '1px',
        backgroundColor: '#F2511B',
        margin: '-9px auto 0 auto',
        transition: 'opacity .35s ease-in-out',
    },
    projectButtonSource: {
        width: '90%',
        height: '1px',
        backgroundColor: '#F2511B',
        margin: '-9px auto 0 auto',
        transition: 'opacity .35s ease-in-out',
    },

}));



function ProjectItem( {project, index} ) {

    const classes = useStyles();

    return (
        <ListItem className={classes.listItem} key={index}>

            <Grid container spacing={5} direction={(index % 2 === 0) ? "row" : "row-reverse"} justify ="center" alignItems="center" >
                
                <Grid item container xs={12} sm={8} md={5} justify="center" alignItems="center">

                    <Fade bottom>

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

                                <Grid item container direction="column" justify="flex-start" alignItems="flex-start">

                                    <Typography variant="body1" className={classes.appDescriptionHeading}>
                                        What
                                    </Typography>

                                    <Typography className={classes.appDescriptions}>

                                        {project.what}

                                    </Typography>

                                    <Typography variant="body1" className={classes.appDescriptionHeading}>
                                        Why
                                    </Typography>


                                    <Typography className={classes.appDescriptions}>

                                        {project.why}

                                    </Typography>
                                </Grid>


                                <Grid 
                                    item 
                                    container 
                                    direction="row" 
                                    justify="space-around" 
                                    alignItems="center" 
                                    className={classes.iconList}
                                >

                                    <DevIcons iconList={project.stack}/>

                                </Grid>

                                <Grid container direction="row" justify="flex-start">

                                    <div className={classes.projectButtonCont}>

                                        <Button 
                                            href={project.deployed.toString()} 
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            disabled={project.deployed === false} 
                                            className={classes.projectItemButton}
                                        >

                                            {`DEMO${!project.deployed ? ': n/a' : ''}`}

                                        </Button>

                                        <div className={!project.deployed ? '' : classes.projectButtonDemo}></div>

                                    </div>

                                    <div className={classes.projectButtonCont}>


                                        <Button 
                                            href={project.github.toString()} 
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            disabled={project.github === false} 
                                            className={classes.projectItemButton}
                                        >

                                            {`SOURCE CODE${!project.github ? ': private' : ''}`}

                                        </Button>

                                        <div className={!project.github ? '' : classes.projectButtonSource}></div>

                                    </div>

                                </Grid>

                            </MuiThemeProvider>

                        </Paper>

                    </Fade>

                </Grid>


                <Grid item container xs={12} sm={9} md={7}>

                    <Fade left mirror={index % 2 === 0}>

                        <Paper className={classes.gifCont}>

                            {
                                project.deployed
                                ?   <a href={project.deployed.toString()} target="_blank" rel="noopener noreferrer">
                                        <img 
                                            className={classes.gif} 
                                            src={project.gif} 
                                            alt="app-demo"
                                        />
                                    </a>
                                :   <img 
                                        className={classes.gif} 
                                        src={project.gif} 
                                        alt="app-demo"
                                    />
                            } 
                     
                        </Paper>

                    </Fade>

                </Grid>

            </Grid>

        </ListItem>
    )
}

export default ProjectItem
