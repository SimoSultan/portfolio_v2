import React, { useState } from 'react';
import AnimatedButton from './AnimatedButton'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';

import { Link } from 'react-scroll';
import { useMediaQuery } from 'react-responsive'



const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    parallelogram: {
        top: '12px',
        right: '24px',
        width: '559px',
        height: '40px',
        opacity: 0.7,
        overflow: 'hidden',
        position: 'absolute',
        transform: 'skew(-20deg)',
        background: '#F2F3F5',
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    appBar: {
        top: 'auto',
        background: 'transparent',
        boxShadow: 'none',
        marginTop: '3%',
        [theme.breakpoints.down('sm')]: {
            marginTop: '0',
            bottom: '3%',
            width: '25%'
        },
        zIndex: 1000,
    },
    buttonClass: {
        opacity: 0.7,
    },
    buttonText: {
        color: '#F2511B',
        fontFamily: 'Roboto Slab',
    }
}));

export default function Navigation() {
    const classes = useStyles();
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' })
    
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const mobileMenuId = 'app-bar-mobile';

    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
            position="fixed"
        >

            <MenuItem>
                <Link onClick={handleMobileMenuClose} activeClass="active" to="home-cont" spy={true} smooth={true} duration={1000}>
                    <Typography variant="button" className={classes.buttonText}>home</Typography>
                </Link>
            </MenuItem>

            <MenuItem>
                <Link onClick={handleMobileMenuClose} activeClass="active" to="projects-cont" spy={true} smooth={true} duration={1000}>
                    <Typography variant="button" className={classes.buttonText}>projects</Typography>
                </Link>
            </MenuItem>

            <MenuItem>
                <Link onClick={handleMobileMenuClose} activeClass="active" to="blogs-cont" spy={true} smooth={true} duration={1000}>
                    <Typography variant="button" className={classes.buttonText}>blogs</Typography>
                </Link>
            </MenuItem>

            <MenuItem>
                <Link onClick={handleMobileMenuClose} activeClass="active" to="contact-cont" spy={true} smooth={true} duration={1000}>
                    <Typography variant="button" className={classes.buttonText}>contact</Typography>
                </Link>
            </MenuItem>

        </Menu>
    );


    return (

        <div className={classes.grow}>

            <AppBar position="fixed" className={classes.appBar}>

                <Toolbar>

                    <div className={classes.grow} />
                    
                    <div className={isTabletOrMobile ? '' : classes.parallelogram} />

                    <div className={classes.sectionDesktop}>

                        <AnimatedButton text="HOME" linkTo="home-cont"/>

                        <AnimatedButton text="PROJECTS" linkTo="projects-cont"/>

                        <AnimatedButton text="BLOGS" linkTo="blogs-cont"/>

                        <AnimatedButton text="CONTACT" linkTo="contact-cont"/>

                    </div>

                    <div className={classes.sectionMobile}>

                        <Fab 
                            color="primary" 
                            aria-label="menu" 
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            size="large"
                        >
                            <MenuIcon />
                        </Fab>

                    </div>

                </Toolbar>

            </AppBar>

            {renderMobileMenu}

        </div>
    );
}
