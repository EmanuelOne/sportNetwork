import { makeStyles } from "@material-ui/core";
import { Divider, Grid, Typography } from "@mui/material";
import { Box, fontFamily, width } from "@mui/system";
import { Scrollbars } from 'react-custom-scrollbars-2';
import React from "react";

const useStyles = makeStyles({
  wholeBox: {
    color: "#111111",
    width: "80%",
    height: "1094px",
    padding: "1em",
  },
  img: {
    width: "80%",
    height: "80%",
  },
  items: {
    padding: "1em",
  },
  typo: {
    color: "#FFFFFFE5",
    fontFamily: "Poppins",
    textAlign: "left",
  },
  typo1: {
    color: "#FCE61D",
    Padding: "2em",
    marginBottom: "2em",
    fontWeight: 600,
    fontFamily: "Poppins",
    
  },
  divider:{
      backgroundColor:'#2b2b2b',
    
      width:'100%', 
      height:'2px'
  },
  today:{
    paddingTop:'0.8em',
    color:'#FFFFFF66',
    fontFamily:'Poppins',
    textAlign:'left'

  },
  categoriesBox:{
    padding:'1em',
    backgroundColor:'#2F2C2C',
    color:'#FFFFFF80',
    fontFamily:'Poppins',
    textAlign:'left',
    borderRight:'2px',
    borderRightColor:'yellow',
    margin:'2em',
    


  },
  boxTypo:{
    color:'#FFFFFF',
    fontFamily:'Poppins',
    fontWeight:'600',
    paddingTop:'1em'


  }
});
export const TopNews = () => {
  const classes = useStyles();
  
  return (
    <Box  backgroundColor="#111111" width="60%" marginLeft="5em">
         <Box>
        <Typography variant="h3" className = {classes.typo1}>Top News</Typography>
      </Box>
        <Box textAlign="center">
        <Scrollbars style={{ width: '100%', height: '600px',borderRadius: "20px"}}>

        
     

      <Grid
        container
        justifyContent="center"
        justifyItems="center"
        display='flex'
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 3 }}
      >
        <Grid item  sm={4} className={classes.items}>
          <img src="./assets/images/Rectangle6.png" className={classes.img} />
        </Grid>
        <Grid item  sm={8} className={classes.items}>
        <Box>
          <Typography variant="h6" className={classes.typo}>
            5 early NBA suprises after two weeks of regular season action
          </Typography>
            </Box>
         <Box>
           
          <Typography variant="h6" className={classes.today}>
           Today
          </Typography>
          </Box>
        </Grid>
        <Divider className = {classes.divider} />
      <Grid item xs = {6} sm={4} className={classes.items}>
          <img src="./assets/images/Rectangle6.png" className={classes.img} />
        </Grid>
        <Grid item xs = {6} sm={8} className={classes.items}>
        <Box>
          <Typography variant="h6" className={classes.typo}>
            5 early NBA suprises after two weeks of regular season action
          </Typography>
            </Box>
         <Box>
           
          <Typography variant="h6" className={classes.today}>
           Today
          </Typography>
          </Box>
        </Grid>
       < Divider className = {classes.divider} />        
      <Grid item xs = {6} sm={4} className={classes.items}>
          <img src="./assets/images/Rectangle6.png" className={classes.img} />
        </Grid>
        <Grid item xs = {6} sm={8} className={classes.items}>
        <Box>
          <Typography variant="h6" className={classes.typo}>
            5 early NBA suprises after two weeks of regular season action
          </Typography>
            </Box>
         <Box>
           
          <Typography variant="h6" className={classes.today}>
           Today
          </Typography>
          </Box>
        </Grid>
      <Divider className = {classes.divider} />
        
      <Grid item xs = {6} sm={4} className={classes.items}>
          <img src="./assets/images/Rectangle6.png" className={classes.img} />
        </Grid>
        <Grid item xs = {6} sm={8} className={classes.items}>
        <Box>
          <Typography variant="h6" className={classes.typo}>
            5 early NBA suprises after two weeks of regular season action
          </Typography>
            </Box>
         <Box>
           
          <Typography variant="h6" className={classes.today}>
           Today
          </Typography>
          </Box>
        </Grid>
      <Divider className = {classes.divider} />
        
      <Grid item xs = {6} sm={4} className={classes.items}>
          <img src="./assets/images/Rectangle6.png" className={classes.img} />
        </Grid>
        <Grid item xs = {6} sm={8} className={classes.items}>
        <Box>
          <Typography variant="h6" className={classes.typo}>
            5 early NBA suprises after two weeks of regular season action
          </Typography>
            </Box>
         <Box>
           
          <Typography variant="h6" className={classes.today}>
           Today
          </Typography>
          </Box>
        </Grid>
      <Divider className = {classes.divider} />
        
      <Grid item xs = {6} sm={4} className={classes.items}>
          <img src="./assets/images/Rectangle6.png" className={classes.img} />
        </Grid>
        <Grid item xs = {6} sm={8} className={classes.items}>
        <Box>
          <Typography variant="h6" className={classes.typo}>
            5 early NBA suprises after two weeks of regular season action
          </Typography>
            </Box>
         <Box>
           
          <Typography variant="h6" className={classes.today}>
           Today
          </Typography>
          </Box>
        </Grid>
      <Divider className = {classes.divider} />
        
      <Grid item xs = {6} sm={4} className={classes.items}>
          <img src="./assets/images/Rectangle6.png" className={classes.img} />
        </Grid>
        <Grid item xs = {6} sm={8} className={classes.items}>
        <Box>
          <Typography variant="h6" className={classes.typo}>
            5 early NBA suprises after two weeks of regular season action
          </Typography>
            </Box>
         <Box>
           
          <Typography variant="h6" className={classes.today}>
           Today
          </Typography>
          </Box>
        </Grid>
      <Divider className = {classes.divider} />
        
      <Grid item xs = {6} sm={4} className={classes.items}>
          <img src="./assets/images/Rectangle6.png" className={classes.img} />
        </Grid>
        <Grid item xs = {6} sm={8} className={classes.items}>
        <Box>
          <Typography variant="h6" className={classes.typo}>
            5 early NBA suprises after two weeks of regular season action
          </Typography>
            </Box>
         <Box>
           
          <Typography variant="h6" className={classes.today}>
           Today
          </Typography>
          </Box>
        </Grid>
      <Divider className = {classes.divider} />
        
      <Grid item xs = {6} sm={4} className={classes.items}>
          <img src="./assets/images/Rectangle6.png" className={classes.img} />
        </Grid>
        <Grid item xs = {6} sm={8} className={classes.items}>
        <Box>
          <Typography variant="h6" className={classes.typo}>
            5 early NBA suprises after two weeks of regular season action
          </Typography>
            </Box>
         <Box>
           
          <Typography variant="h6" className={classes.today}>
           Today
          </Typography>
          </Box>
        </Grid>
      <Divider className = {classes.divider} />
        
      <Grid item xs = {6} sm={4} className={classes.items}>
          <img src="./assets/images/Rectangle6.png" className={classes.img} />
        </Grid>
        <Grid item xs = {6} sm={8} className={classes.items}>
        <Box>
          <Typography variant="h6" className={classes.typo}>
            5 early NBA suprises after two weeks of regular season action
          </Typography>
            </Box>
         <Box>
           
          <Typography variant="h6" className={classes.today}>
           Today
          </Typography>
          </Box>
        </Grid>
      <Divider className = {classes.divider} />
        
      <Grid item xs = {6} sm={4} className={classes.items}>
          <img src="./assets/images/Rectangle6.png" className={classes.img} />
        </Grid>
        <Grid item xs = {6} sm={8} className={classes.items}>
        <Box>
          <Typography variant="h6" className={classes.typo}>
            5 early NBA suprises after two weeks of regular season action
          </Typography>
            </Box>
         <Box>
           
          <Typography variant="h6" className={classes.today}>
           Today
          </Typography>
          </Box>
        </Grid>
      <Divider className = {classes.divider} />
        
      <Grid item xs = {6} sm={4} className={classes.items}>
          <img src="./assets/images/Rectangle6.png" className={classes.img} />
        </Grid>
        <Grid item xs = {6} sm={8} className={classes.items}>
          <Box>
          <Typography variant="h6" className={classes.typo}>
            5 early NBA suprises after two weeks of regular season action
          </Typography>
            </Box>
         <Box>
           
          <Typography variant="h6" className={classes.today}>
           Today
          </Typography>
          </Box>
        </Grid>
      <Divider clasess = {{root:classes.divider}} />
      
        

      </Grid>
      <Box className = {classes.categoriesBox} borderLeft = {4} borderColor="yellow">
        <Typography variant = 'h3' className = {classes.boxTypo}>
        BASKETBALL
        </Typography>
        <Typography variant = 'h5'>
        Get the Latest Lifestyle and Livenews all across africa 

        </Typography>
      </Box >
      <Box className = {classes.categoriesBox} borderLeft = {4} borderColor="yellow">
        <Typography variant = 'h3' className = {classes.boxTypo}>
        FOOTBALL
        </Typography>
        <Typography variant = 'h5'>
        Get the Latest Lifestyle and Livenews all across africa  

        </Typography>
      </Box>
    </Scrollbars>
      
      </Box>
    </Box>
  );
};
