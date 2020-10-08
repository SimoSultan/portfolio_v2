import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import Fab from '@material-ui/core/Fab';

import { Link } from 'react-scroll';

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
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function Navigation() {
  const classes = useStyles();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

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
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      position="fixed"
    >
      <MenuItem>
        <Link onClick={handleMobileMenuClose} activeClass="active" to="home-cont" spy={true} smooth={true} duration={1000}>
          <Typography color="white" variant="button">home</Typography>
        </Link>
      </MenuItem>

      <MenuItem>
        <Link onClick={handleMobileMenuClose} activeClass="active" to="projects-cont" spy={true} smooth={true} duration={1000}>
          <Typography color="white" variant="button">projects</Typography>
        </Link>
      </MenuItem>

      <MenuItem>
        <Link onClick={handleMobileMenuClose} activeClass="active" to="blogs-cont" spy={true} smooth={true} duration={1000}>
          <Typography variant="button">blogs</Typography>
        </Link>
      </MenuItem>

      <MenuItem>
        <Link onClick={handleMobileMenuClose} activeClass="active" to="contact-cont" spy={true} smooth={true} duration={1000}>
          <Typography variant="button">contact</Typography>
        </Link>
      </MenuItem>

    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="fixed" style={{background: 'transparent', boxShadow: 'none', paddingTop: '3%'}}>
        <Toolbar>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Button>
              <Link activeClass="active" to="home-cont" spy={true} smooth={true} duration={1000}>
                <Typography color="white" variant="h6">home</Typography>
              </Link>
            </Button>
            <Button>
              <Link activeClass="active" to="projects-cont" spy={true} smooth={true} duration={1000}>
                <Typography color="white" variant="h6">projects</Typography>
              </Link>
            </Button>

            <Button>
              <Link activeClass="active" to="blogs-cont" spy={true} smooth={true} duration={1000}>
                <Typography variant="h6">blogs</Typography>
              </Link>
            </Button>

            <Button>
              <Link activeClass="active" to="contact-cont" spy={true} smooth={true} duration={1000}>
                <Typography variant="h6">contact</Typography>
              </Link>
            </Button>
          </div>
          <div className={classes.sectionMobile}>

          <Fab color="primary" aria-label="menu" size="small">
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Fab>

          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
}
