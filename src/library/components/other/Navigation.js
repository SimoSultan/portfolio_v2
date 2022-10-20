import React, { useState } from "react";
import AnimatedButton from "./AnimatedButton";
import {
  useMediaQuery,
  AppBar,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  Fab,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import CONTENT from "../../content.json";

import { Link } from "react-scroll";

export default function Navigation() {
  const theme = useTheme();
  const {
    nav: { mobileMenuId, navLinks },
  } = CONTENT;

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const isTabletOrMobile = useMediaQuery("(max-width: 1024px)");
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "bottom", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      position="fixed"
      sx={{ zIndex: 1000 }}
    >
      {navLinks.map(({ text, id }) => (
        <MenuItem key={`mobile-menu-key-${text}`}>
          <Link
            onClick={handleMobileMenuClose}
            activeClass="active"
            to={id}
            spy={true}
            smooth={true}
            duration={1000}
          >
            <Typography
              sx={{
                color: "#F2511B",
                fontFamily: "Roboto Slab",
              }}
            >
              {text}
            </Typography>
          </Link>
        </MenuItem>
      ))}
    </Menu>
  );

  return (
    <>
      <AppBar
        position="fixed"
        component="header"
        sx={{
          background: "transparent",
          boxShadow: "none",
          marginTop: theme.breakpoints.down("sm") ? "3%" : "0",
          width: theme.breakpoints.up("sm") ? "50%" : "0",
          display: isTabletOrMobile ? "none" : "flex",
          zIndex: 1000,
        }}
      >
        <Toolbar component="nav">
          <div style={{ flexGrow: 1 }} />

          {!isTabletOrMobile ? (
            <>
              <div
                style={{
                  top: "12px",
                  right: "24px",
                  width: "559px",
                  height: "40px",
                  opacity: 0.7,
                  overflow: "hidden",
                  position: "absolute",
                  transform: "skew(-20deg)",
                  background: "#F2F3F5",
                }}
              />
              {navLinks.map(({ text, id }) => (
                <AnimatedButton
                  text={text}
                  linkTo={id}
                  key={`desktop-menu-key-${text}`}
                />
              ))}
            </>
          ) : (
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
          )}
        </Toolbar>
      </AppBar>

      {renderMobileMenu}
    </>
  );
}
