import { makeStyles } from '@material-ui/core';
import React, {useState} from  'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';

const useStyles = makeStyles({
    popular:{
        width:"100%",
        alignItems:'center',
    },
    top: {
        backgroundColor:"black",
        color:"white",
        alignItems: "center",
        fontFamily:'Poppins',
        height: 40,
    },
    img: {
        width: 107,
        height: 98
    }

})

 export const Popular = (props)=>{
    const classes = useStyles();

    return (
        <Box className={classes.popular}>
            <Box className={classes.top} pt={1}>
                <Typography variant="h5" align="center">Popular</Typography>
            </Box>
            <Box pt={2} pl={1} pr={2}>
            <Grid container spacing={1}>
                <Grid item xs={4}>
                    <img src={'./assets/images/Rectangle_1.png'} className={classes.img} />
                </Grid>
                <Grid item xs={7}>
                    <Typography variant="body2">
                        Derrick Rose on career: 'I'm going to try and Tom Brady this thing
                    </Typography>
                    <Grid container pt={4}>
                        <Grid item xs={4}><Typography variant="body2" color="text.secondary">Today</Typography></Grid>
                        <Grid item xs={4}></Grid>
                        <Grid item xs={4}><Typography variant="body2" color="text.secondary">12:45pm</Typography></Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Box pt={2} pb={2}><Divider /></Box>
            <Grid container spacing={1}>
                <Grid item xs={4}>
                    <img src={'./assets/images/Rectangle_1.png'} className={classes.img} />
                </Grid>
                <Grid item xs={7}>
                    <Typography variant="body2">
                        Derrick Rose on career: 'I'm going to try and Tom Brady this thing
                    </Typography>
                    <Grid container pt={4}>
                        <Grid item xs={4}><Typography variant="body2" color="text.secondary">Today</Typography></Grid>
                        <Grid item xs={4}></Grid>
                        <Grid item xs={4}><Typography variant="body2" color="text.secondary">12:45pm</Typography></Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Box pt={2} pb={2}><Divider /></Box>
            <Grid container spacing={1}>
                <Grid item xs={4}>
                    <img src={'./assets/images/Rectangle_1.png'} className={classes.img} />
                </Grid>
                <Grid item xs={7}>
                    <Typography variant="body2">
                        Derrick Rose on career: 'I'm going to try and Tom Brady this thing
                    </Typography>
                    <Grid container pt={4}>
                        <Grid item xs={4}><Typography variant="body2" color="text.secondary">Today</Typography></Grid>
                        <Grid item xs={4}></Grid>
                        <Grid item xs={4}><Typography variant="body2" color="text.secondary">12:45pm</Typography></Grid>
                    </Grid>
                </Grid>
            </Grid>
            
            <Box pt={2} pb={2}><Divider /></Box>
            <Grid container spacing={1}>
                <Grid item xs={4}>
                    <img src={'./assets/images/Rectangle_1.png'} className={classes.img} />
                </Grid>
                <Grid item xs={7}>
                    <Typography variant="body2">
                        Derrick Rose on career: 'I'm going to try and Tom Brady this thing
                    </Typography>
                    <Grid container pt={4}>
                        <Grid item xs={4}><Typography variant="body2" color="text.secondary">Today</Typography></Grid>
                        <Grid item xs={4}></Grid>
                        <Grid item xs={4}><Typography variant="body2" color="text.secondary">12:45pm</Typography></Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Box pt={2} pb={2}><Divider /></Box>
            <Grid container spacing={1}>
                <Grid item xs={4}>
                    <img src={'./assets/images/Rectangle_1.png'} className={classes.img} />
                </Grid>
                <Grid item xs={7}>
                    <Typography variant="body2">
                        Derrick Rose on career: 'I'm going to try and Tom Brady this thing
                    </Typography>
                    <Grid container pt={4}>
                        <Grid item xs={4}><Typography variant="body2" color="text.secondary">Today</Typography></Grid>
                        <Grid item xs={4}></Grid>
                        <Grid item xs={4}><Typography variant="body2" color="text.secondary">12:45pm</Typography></Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Box pt={2} pb={2}><Divider /></Box>
            <Grid container spacing={1}>
                <Grid item xs={4}>
                    <img src={'./assets/images/Rectangle_1.png'} className={classes.img} />
                </Grid>
                <Grid item xs={8}>
                    <Typography variant="body2">
                        Derrick Rose on career: 'I'm going to try and Tom Brady this thing
                    </Typography>
                    <Grid container pt={4}>
                        <Grid item xs={4}><Typography variant="body2" color="text.secondary">Today</Typography></Grid>
                        <Grid item xs={4}></Grid>
                        <Grid item xs={4}><Typography variant="body2" color="text.secondary">12:45pm</Typography></Grid>
                    </Grid>
                </Grid>
            </Grid>
            
            </Box>

        </Box>
    )
}
