import React from 'react';
import { makeStyles, AppBar, Box, Typography } from '@material-ui/core';
import { Button } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: 'radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, 0.10) 100%), url("https://s3-alpha-sig.figma.com/img/bacd/10d1/d279933c1d63fed040b5b425a7ef8194?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fWAGI-N0w0vhEermV4svkb229weynIhXzBa84vYMThQIVi6PL6MJo-Wv7hiNhx~ravU28BYp7QjjqXrlR31F8obrtpd1k7VLMKsTCLq1nPC236U8XCWs-PedAzyZ7L~XweCp0bHZmjozrxqoS9br6kgBFEuYxFLL8Rt6i13q51NzBoitBKV8xhe2ubMpKhs9lJ14oDEuRb3T~nCWJ~DQRT2RMeHaqo0JbHQ5mRnXgiHiMB01ZXfHrpnOle6GYC-b~d02gT0XYwODQToPwlxY1IVtn27zXQT~LZUtk8m5qqJv-N4ISWxvXcUucZHHFQvUYe~VmUnw10k~9hI2L-2yYA__")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ffffff',
  },
  content: {
    textAlign: 'center',
  },
  button: {
    width: 150,
    height: 50,
    fontSize: 16,
    fontWeight: 'bold',
    border: '2px solid #FFCC80', // Yellow border
    color: 'white',
    borderRadius: 40,
    marginTop: theme.spacing(2),
  },
  main: {
    width: '600px',
    height: '74px',
    top: '157px',
    left: '715px',
    fontFamily: 'Forum',
    fontSize: '80px',
    fontWeight: '400',
    lineHeight: '74px',
    letterSpacing: '-0.05em',
    textAlign: 'center',


  },
  firstLine: {
    width: 'Hug (323px)',
    height: 'Hug (28px)',
    top: '100px',
    left: '799px',
    gap: '7px',
    color: '#FFCC80',


  },
}));

const Videos = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none' }}>
        <Box className={classes.content}>
          <Typography className={classes.firstLine} style={{alignContent: 'center'}}>✦DELIGHTFUL EXPERIENCE✦</Typography>
          <Typography className={classes.main}>Watch Our Video</Typography>
          <Typography>Crafting Culinary Memories, One Bite at a Time</Typography>
        </Box>
      </AppBar>
    </div>
  );
};

export default Videos;
