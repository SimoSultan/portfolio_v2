import React from "react"
import { useMediaQuery, Typography, Grid } from "@mui/material"

function DevIcons({ iconList }) {
    const isDesktopOrLaptop = useMediaQuery("(minWidth: 1024px)")

    const listItems = iconList.map((icon, index) => (
        <Grid
            item
            container
            direction="row"
            xs={isDesktopOrLaptop ? 3 : 6}
            key={`icon-key-${index}`}
        >
            <Grid item container direction="column">
                <img
                    style={{ width: "40px", margin: "0 auto" }}
                    src={`images/devIcons/${icon.toLowerCase()}-plain.svg`}
                    alt={`${icon}-icon`}
                />

                <Typography
                    variant="subtitle2"
                    stx={{
                        letterSpacing: "1px",
                        lineHeight: "1rem",
                        marginTop: "3%",
                        color: "#235aa1",
                        fontFamily: "PT Sans Narrow, sand-serif",
                        fontSize: "1rem",
                    }}
                >
                    {icon}
                </Typography>
            </Grid>
        </Grid>
    ))

    return (
        <Grid
            item
            container
            xs
            direction="row"
            spacing={2}
            sx={{ margin: "3% auto" }}
            justifyContent="center"
        >
            {listItems}
        </Grid>
    )
}

export default DevIcons
