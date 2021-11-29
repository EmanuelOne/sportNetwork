import { Button, makeStyles, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import TelegramIcon from '@mui/icons-material/Telegram';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@material-ui/core/CardContent';

import { ContactInformation } from './contactInformation';
import { ContactIcons } from './contactIcons';
import { MenuBar } from './menuBar';

const useStyles = makeStyles({
  contactForm: {
    alignItems: 'center',
    position: 'relative',
  },
  imageView: {
    //   backgroundImage: `url($ImageBack)`,
  },
  typgo: {
    fontFamily: 'Poppins',
    color: '#E5E5E5',

    fontWeight: 700,
    fontSize: 94,
  },
  txtField: {
    marginTop: '2em',
    fontFamily: 'Poppins',
    color: 'rgba(0, 0, 0, 0.5)',
  },
  contactBox: {
    backgroundColor: '#F5F5F5',
    borderRadius: '10px',
    padding: '1rem 1rem 5rem',
    marginTop: '1rem',
  },
  btn: {
    backgroundColor: '#2F2C2C',
    fontFamily: 'popins',
    fontSize: '110%',
    justifyItems: 'center',
    color: 'white',
    width: '100%',
    '&:hover': {
      backgroundColor: '#2F2C2C',
    },
  },
  circle1: {
    borderRadius: 300,
    backgroundColor: '#FCE61D',
    height: 400,
    width: 400,
    position: 'absolute',
    right: '0',
    transform: 'translate(50%,50%)',
    overflow: 'hidden',
    top: '-50%',
  },
  circle2: {
    borderRadius: 100,
    backgroundColor: '#FCE61D',
    height: 200,
    width: 200,
  },
  span: {
    color: 'yellow',
  },
  typ: {
    color: '#FFFFFF',

    textAlign: 'center',
  },
  cIcon: {
    color: '#FCE61D',
    padding: '0.6em',
    fontSize: '10em',
  },
  txt: {
    color: '#201F1E',
    fontFamily: 'poppins',
    fontWeight: '400',
    fontSize: '20px',
  },
  rectangle: {
    height: '70px',
    backgroundColor: '#F9E31D',
    height: '100px',
  },
  imageView: {
    backgroundImage: `url(/images/beautiful-young-woman.png)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    position: 'relative',
    width: '100%',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: '0',
      left: '0',
      bottom: '0',
      right: '0',
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0,0,0,0.5)',
    },
  },
});

const initialFormValues = {
  fullName: '',
  address: '',
  phone: '',
  message: '',
};
export const ContactDesktopForm = (props) => {
  const [formValue, setFormValue] = useState(initialFormValues);
  const classes = useStyles();
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValue({
      ...formValue,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('data');
    console.log(formValue);
  };
  return (
    <Box className={classes.contactForm + ' contact'} backgroundColor="#E5E5E5">
      <Box className={classes.imageView}>
        <Box
          marginLeft="0%"
          marginRight="0%"
          style={{
            // backgroundImage: 'url(/images/beautiful-young-woman.png)',
            backgroundSize: 'cover',
          }}
        >
          <Box>
            <Box pt={10}>
              <Typography
                className={classes.typgo}
                variant="h2"
                align="center"
                sx={{ color: '#fff' }}
              >
                {' '}
                We are ready to
              </Typography>
              <Typography className={classes.typgo} variant="h2" align="center">
                {' '}
                <span className={classes.span}> hear </span> from you!
              </Typography>
            </Box>

            <Box pt={5}>
              <Typography className={classes.typ} variant="h6" align="center">
                {' '}
                You can reach by calling us, sending a message or even pay a
              </Typography>
              <Typography variant="h6" align="center" className={classes.typ}>
                {' '}
                warm visit
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ position: 'relative' }}>
        <Box className={classes.cd} sx={{ backgroundColor: '#e5e5e5 ' }}>
          <Box
            style={{
              width: '80%',
              display: 'flex',
              justifyContent: 'center',
              backgroundColor: '#fff',
              margin: 'auto',
              gap: '2rem',
              transform: 'translateY(-20vh)',
              borderRadius: '10px',
              zIndex: 3,
            }}
          >
            <Box style={{ width: '100%', padding: '4rem 2rem' }}>
              <Box>
                <Typography variant="h4" className={classes.txt}>
                  We won't be sharing any of your information with any one. We
                  are completely at your service
                </Typography>
              </Box>
              <TextField
                className={classes.txtField}
                label="Full Name"
                name="fullName"
                value={formValue.fullName}
                onChange={handleChange}
                fullWidth
              />

              <TextField
                className={classes.txtField}
                label="Contact Address"
                name="address"
                value={formValue.address}
                onChange={handleChange}
                fullWidth
              />

              <TextField
                className={classes.txtField}
                label="Phone"
                name="phone"
                value={formValue.phone}
                onChange={handleChange}
                fullWidth
              />

              <TextField
                className={classes.txtField}
                name="message"
                value={formValue.message}
                onChange={handleChange}
                multiline
                rows={10}
                variant="filled"
                placeholder="Type your message here"
                fullWidth
              />
            </Box>
            <Box style={{ width: '100%' }}>
              <Box>
                <ContactInformation />
              </Box>
              <Box>
                <ContactIcons />
              </Box>
              <Box>
                <Button
                  className={`${classes.txtField} ${classes.btn}`}
                  variant="contained"
                  onClick={handleSubmit}
                  endIcon={<TelegramIcon className={classes.cIcon} />}
                >
                  SEND MESSAGE
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
        {/* <Box className={classes.circle1}></Box>
        <Box className={classes.circle2}></Box> */}
        <Box
          style={{
            clipPath: 'circle(50.0% at 100% 50%)',
            height: '300px',
            width: '300px',
            backgroundColor: '#ff0',
            position: 'absolute',
            right: '0px',
            top: '-200px',
          }}
        ></Box>{' '}
        <Box
          style={{
            clipPath: 'circle(50.0% at 0 50%)',
            height: '200px',
            width: '200px',
            backgroundColor: '#ff0',
          }}
        ></Box>
      </Box>
    </Box>
  );
};

/*
           <Box
        pt={0}
        sx={{
          display: 'flex',
          transform: 'translateY(-20vh)',
          backgroundColor: '#e5e5e5',
          width: 'fit-content',
          position: 'absolute',
        }}
      >
        <Grid container>
          <Grid item xs={0.5}></Grid>
          <Grid item xs={6}>
            <Card className={classes.contactBox}>
              <CardContent>
                <Typography variant="h4" className={classes.txt}>
                  We won't be sharing any of your information with any one. We
                  are completely at your service
                </Typography>

                <TextField
                  className={classes.txtField}
                  label="Full Name"
                  name="fullName"
                  value={formValue.fullName}
                  onChange={handleChange}
                  fullWidth
                />

                <TextField
                  className={classes.txtField}
                  label="Contact Address"
                  name="address"
                  value={formValue.address}
                  onChange={handleChange}
                  fullWidth
                />

                <TextField
                  className={classes.txtField}
                  label="Phone"
                  name="phone"
                  value={formValue.phone}
                  onChange={handleChange}
                  fullWidth
                />

                <TextField
                  className={classes.txtField}
                  name="message"
                  value={formValue.message}
                  onChange={handleChange}
                  multiline
                  rows={10}
                  variant="filled"
                  placeholder="Type your message here"
                  fullWidth
                />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={5}>
            <ContactInformation />
            <ContactIcons />
            <Box pt={2}>
              <Button
                className={`${classes.txtField} ${classes.btn}`}
                variant="contained"
                onClick={handleSubmit}
                endIcon={<TelegramIcon className={classes.cIcon} />}
              >
                SEND MESSAGE
              </Button>
            </Box>
          </Grid>
          <Grid item xs={0.5}></Grid>
        </Grid>
      </Box>


      <Box pl={'10%'} pt={25}>
        <Box className={classes.circle2}></Box>
      </Box>





*/
