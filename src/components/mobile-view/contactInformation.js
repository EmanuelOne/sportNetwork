import { Button, Grid, makeStyles } from "@material-ui/core";
import React from "react";

import CallIcon from "@mui/icons-material/Call";
import MailIcon from "@mui/icons-material/Mail";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const useStyles = makeStyles({
  info: {
    background: "#2F2C2C",
    paddingBottom: "2em",
  },
  ttile: {
    fontFamily: "Quicksand",
    fontWeight: "bold",

    lineHeight: "38px",
    color: "#FFFFFF",
    textAlign: "center",
    padding: "1em",
  },
  ic: {
    color: "#FFFFFF",
    // paddingLeft: "100px",
    paddingTop: "2em",
  },
  ictext: {
    fontFamily: "Quicksand",
    color: "#FFFFFF",
    paddingTop: "2.1em",
  },
});

export const ContactInformation = (props) => {
  const classes = useStyles();

  return (
    <Box className={classes.info}>
      <Typography variant="h4" className={classes.ttile}>
        {" "}
        Contact Information
      </Typography>
      <Grid container spacing={1} alignContent="center" justifyContent="center">
        
        <Grid item xs={3}>
          <CallIcon className={classes.ic} />
        </Grid>

        <Grid item xs={8}>
          <Typography className={classes.ictext}>TK: Xballmedia</Typography>
        </Grid>

        <Grid item xs={3}>
          <MailIcon className={classes.ic} />
        </Grid>
        <Grid item xs={8}>
          <Typography className={classes.ictext}>
          xballmedia00@gmail.com{" "}
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <LocationOnIcon className={classes.ic} />
        </Grid>
        <Grid item xs={8}>
          <Typography className={classes.ictext}>
            IN: Xball_media{" "}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
