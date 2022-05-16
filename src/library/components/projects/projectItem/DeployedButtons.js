import React from "react"
import { Grid, Button } from "@mui/material"
import { useTheme } from "@mui/material/styles"

export default function DeployedButtons({ project }) {
    const theme = useTheme()
    const { deployed, github } = project

    return (
        <Grid container direction="row" justifyContent="flex-start" spacing={2}>
            <Grid item>
                <Button
                    href={deployed.toString()}
                    target="_blank"
                    rel="noopener noreferrer"
                    disabled={deployed === false}
                    sx={{
                        cursor: "pointer",
                        color: "#F2511B",
                        letterSpacing: "1px",
                        fontFamily: "Roboto Slab",
                        fontSize: "0.9rem",
                        borderBottom: deployed && "1px solid #F2511B",
                        borderRadius: 0,
                        paddingBottom: 0,
                    }}
                >
                    {`DEMO${!deployed ? ": n/a" : ""}`}
                </Button>
            </Grid>

            <Grid item>
                <Button
                    href={github.toString()}
                    target="_blank"
                    rel="noopener noreferrer"
                    disabled={github === false}
                    sx={{
                        cursor: "pointer",
                        color: "#F2511B",
                        letterSpacing: "1px",
                        fontFamily: "Roboto Slab",
                        fontSize: "0.9rem",
                        borderBottom: github && "1px solid #F2511B",
                        borderRadius: 0,
                        paddingBottom: 0,
                    }}
                >
                    {`SOURCE CODE${!github ? ": private" : ""}`}
                </Button>
            </Grid>
        </Grid>
    )
}
