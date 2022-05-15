import React from "react"
import { Link, Typography } from "@mui/material"
import CONTENT from "../../content.json"

function Copyright() {
    const {
        landingPage: { firstName, lastName },
    } = CONTENT

    return (
        <Typography
            variant="body2"
            color="textSecondary"
            align="center"
            sx={{
                color: "#d8d8d8",
                fontFamily: "Raleway, sans-serif",
                marginBottom: "3%",
            }}
        >
            {"Copyright © "}
            <Link
                href="https://simosultan.netlify.app/"
                sx={{ color: "#f5a651", textDecoration: "none" }}
                target="_blank"
                rel="noopener noreferrer"
            >
                {`${firstName} ${lastName}`}
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    )
}

export default Copyright
