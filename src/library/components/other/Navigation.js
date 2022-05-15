import React, { useState } from "react"
import AnimatedButton from "./AnimatedButton"
import {
    useMediaQuery,
    AppBar,
    Toolbar,
    Typography,
    Menu,
    MenuItem,
    Fab,
} from "@mui/material"
import { useTheme } from "@mui/material/styles"
import MenuIcon from "@mui/icons-material/Menu"

import { Link } from "react-scroll"

export default function Navigation() {
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null)
    const isTabletOrMobile = useMediaQuery("(max-width: 1024px)")
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)
    const theme = useTheme()

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null)
    }

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget)
    }

    const mobileMenuId = "app-bar-mobile"

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
        >
            <MenuItem>
                <Link
                    onClick={handleMobileMenuClose}
                    activeClass="active"
                    to="home-cont"
                    spy={true}
                    smooth={true}
                    duration={1000}
                >
                    <Typography
                        variant="button"
                        sx={{ color: "#F2511B", fontFamily: "Roboto Slab" }}
                    >
                        home
                    </Typography>
                </Link>
            </MenuItem>

            <MenuItem>
                <Link
                    onClick={handleMobileMenuClose}
                    activeClass="active"
                    to="projects-cont"
                    spy={true}
                    smooth={true}
                    duration={1000}
                >
                    <Typography
                        variant="button"
                        sx={{ color: "#F2511B", fontFamily: "Roboto Slab" }}
                    >
                        projects
                    </Typography>
                </Link>
            </MenuItem>

            <MenuItem>
                <Link
                    onClick={handleMobileMenuClose}
                    activeClass="active"
                    to="blogs-cont"
                    spy={true}
                    smooth={true}
                    duration={1000}
                >
                    <Typography
                        variant="button"
                        sx={{ color: "#F2511B", fontFamily: "Roboto Slab" }}
                    >
                        blogs
                    </Typography>
                </Link>
            </MenuItem>

            <MenuItem>
                <Link
                    onClick={handleMobileMenuClose}
                    activeClass="active"
                    to="contact-cont"
                    spy={true}
                    smooth={true}
                    duration={1000}
                >
                    <Typography
                        variant="button"
                        sx={{ color: "#F2511B", fontFamily: "Roboto Slab" }}
                    >
                        contact
                    </Typography>
                </Link>
            </MenuItem>
        </Menu>
    )

    return (
        <div style={{ flexGrow: 1 }}>
            <AppBar
                position="fixed"
                sx={{
                    background: "transparent",
                    boxShadow: "none",
                    marginTop: theme.breakpoints.down("sm") ? "3%" : "0",
                    width: theme.breakpoints.up("sm") ? "50%" : "0",
                    display: isTabletOrMobile ? "none" : "flex",
                    zIndex: 1000,
                }}
            >
                <Toolbar>
                    <div style={{ flexGrow: 1 }} />
                    {!isTabletOrMobile && (
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
                    )}

                    <div
                        style={{
                            display: theme.breakpoints.up("md")
                                ? "flex"
                                : "none",
                        }}
                    >
                        <AnimatedButton text="HOME" linkTo="home-cont" />

                        <AnimatedButton
                            text="PROJECTS"
                            linkTo="projects-cont"
                        />

                        <AnimatedButton text="BLOGS" linkTo="blogs-cont" />

                        <AnimatedButton text="CONTACT" linkTo="contact-cont" />
                    </div>

                    <div
                        style={{
                            display: theme.breakpoints.up("md")
                                ? "none"
                                : "flex",
                        }}
                    >
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
    )
}
