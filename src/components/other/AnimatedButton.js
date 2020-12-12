import React from 'react'

import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core'

import { Link } from 'react-scroll';
import { useSpring, animated } from "react-spring";

const useStyles = makeStyles(() => ({
    parallelogram: {
        width: '100%',
        height: '100%',
        transform: 'skew(-20deg)',
        background: 'transparent',
        position: 'relative',
        top: 0,
        overflow: 'hidden',
    },
    buttonCont: {
        cursor: 'pointer',
        position: 'relative',
        width: '140px',
        height: '40px',
        color: '#000',
    },
    buttonTextCont: {
        opacity: 1,
        position: 'absolute',
        top: 0,
        padding: '5px',
    },
    glance: {
        background: '#25A9FC',
        width: '120%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
    },
    buttonText: {
        fontFamily: 'Roboto Slab',
        fontWeight: 'bold',
    }
}))


function AnimatedButton( { text, linkTo, callback = false} ) {
    const classes = useStyles()
    const [{ x, color }, set] = useSpring(() => ({ x: 100, color: "#F2511B" }));

    // supply an empty function to the onclick if a callback wasn't supplied as a prop
    if (!callback) callback = () => {}
        

    return (
        
        <div 
            className={classes.buttonCont}
            onMouseEnter={() => set({ x: 0, opacity: 1, color: "#fff" })}
            onMouseLeave={() => set({ x: 100, opacity: 0.6, color: "#F2511B" })}
        >

            <div className={classes.parallelogram}>

                <animated.div
                    style={{ transform: x.interpolate((v) => `translateX(-${v}%`) }}
                    className={classes.glance}
                />  

            </div> 

            <Grid container alignItems="center" justify="center" className={classes.buttonTextCont}>

                <Link activeClass="active" to={linkTo} spy={true} smooth={true} duration={1000} onClick={callback}>

                    <animated.span style={{ color }}>

                        <Typography variant="h6" className={classes.buttonText}>
                            
                            {text}

                        </Typography>

                    </animated.span>

                </Link>

            </Grid>
     
        </div>
    )
}

export default AnimatedButton
