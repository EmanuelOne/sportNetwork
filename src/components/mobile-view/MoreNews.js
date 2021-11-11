import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

const useStyles = makeStyles({
    morenews: {
        width: "100%",
        alignItems: 'center'
    },
    images: {
         
    },
    nbabox: {
        backgroundColor: "#DF0000",
        color: "white",
        borderTopRightRadius: 10,
    },
    newstext: {
        backgroundColor: "#111111",
        color: "white",
        height: 100,    
    },
    readmorebtn: {
        backgroundColor: "#FCE61D",
        color: "#000000",
    }
})

export const MoreNews = (props) => {
    const classes = useStyles();

    return (
        <Box className={classes.morenews}>
            <Box
                style={{
                    backgroundImage: "url(./assets/images/Embiid1.png)",
                    backgroundSize: "cover",
                    width: "100%",
                    height: 275
                }}
            >

            <Grid container>
                <Grid item xs={10}></Grid>
                <Grid item xs={2}>
                    <Box pt={1} className={classes.nbabox}><Typography align="center">NBA</Typography></Box>
                </Grid>  
            </Grid>
            
            <Grid container pt={25}>
                <Grid item xs={4}></Grid>
                <Grid item xs={4}>
                    <Button color="secondary"  variant="contained">Read More</Button>
                </Grid>
                <Grid item xs={4}></Grid>
            </Grid>

            </Box>

            <Box className={classes.newstext}>
                <Box p={3}>
                    <Typography variant="body2" align="center">
                        You can reach by calling us, sending a message or even pay a
                        You can reach by calling us
                    </Typography>
                </Box>
            </Box>
            
            <Box pt={2}></Box>
            <Box
                style={{
                    backgroundImage: "url(./assets/images/Embiid1.png)",
                    backgroundSize: "cover",
                    width: "100%",
                    height: 275
                }}
            >

            <Grid container>
                <Grid item xs={10}></Grid>
                <Grid item xs={2}>
                    <Box pt={1} className={classes.nbabox}><Typography align="center">NBA</Typography></Box>
                </Grid>  
            </Grid>
            
            <Grid container pt={25}>
                <Grid item xs={4}></Grid>
                <Grid item xs={4}>
                    <Button color="secondary"  variant="contained">Read More</Button>
                </Grid>
                <Grid item xs={4}></Grid>
            </Grid>

            </Box>

            <Box className={classes.newstext}>
                <Box p={3}>
                    <Typography variant="body2" align="center">
                        You can reach by calling us, sending a message or even pay a
                        You can reach by calling us
                    </Typography>
                </Box>
            </Box>
            
            <Box pt={2}></Box>
            <Grid container pt={2}>
                <Grid item xs={4}></Grid>
                <Grid item xs={4}>
                    <Button color="secondary"  variant="contained">Read More</Button>
                </Grid>
                <Grid item xs={4}></Grid>
            </Grid>
        </Box>
    )
}