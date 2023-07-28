import React from 'react';
import Container from "@mui/material/Container";
import { Avatar, Box, Grid, Typography } from '@mui/material';
import { puru } from '../../constants';
import { TypeAnimation } from 'react-type-animation';

const Banner = () => {
    return (
        <Box sx={{ bgcolor: 'grey.100',  height: '700px', alignItems: 'center', justifyContent: 'center', display: 'flex'}}>
            <Container maxWidth="lg">
                <Grid container spacing={2} justifyContent="center">
                        <Grid item lg={6} sx={{display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Avatar alt="Purushottam Shete" src={puru} sx={{width: 400, height: 400, border: 15, borderColor: 'white', justifyContent: 'center', alignItems: 'center' }}/>
                        </Grid>
                        <Grid item lg={6} sx={{alignItems: 'center', justifyContent: 'center', mt: 2}}>
                            <br/>
                            <Typography
                                variant="span"
                                sx={{
                                fontFamily: 'Montserrat,sans-serif',
                                fontWeight: 900,
                                color: 'inherit',
                                textDecoration: 'none',
                                fontSize: {
                                    lg: 15,
                                    xs: 10
                                },
                                }}
                            >       
                                WELCOME TO NEW WORLD!
                            </Typography>
                            <Typography
                                variant="h1"
                                sx={{
                                fontFamily: 'Montserrat,sans-serif',
                                fontWeight: 900,
                                fontSize: {
                                    lg: 54,
                                    xs: 36
                                },
                                color: 'inherit',
                                textDecoration: 'none',
                                }}
                            >
                                Hi, I'm Purushottam
                            </Typography>
                            <Typography
                                variant="h1"
                                sx={{
                                fontFamily: 'Montserrat,sans-serif',
                                fontWeight: 900,
                                fontSize: {
                                    lg: 50,
                                    xs: 33,
                                },
                                color: 'orange',
                                textDecoration: 'none',
                                }}
                            >
                                <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed once, initially
                                    'Software Developer',
                                    1000,
                                    'Entrepreneur',
                                    1000,
                                    'Teacher',
                                    1000,
                                ]}
                                speed={50}
                                //style={{ fontSize: '50px', fontWeight: 900, color: 'orange' }}
                                repeat={Infinity}
                                />
                            </Typography>
                            <Typography
                                variant="h3"
                                sx={{
                                    fontFamily: 'Montserrat,sans-serif',
                                    fontWeight: 900,
                                    color: 'inherit',
                                    textDecoration: 'none',
                                    fontSize: {
                                        lg: 54,
                                        xs: 36
                                    },
                                }}
                            >
                                based in India.
                            </Typography>
                        </Grid>
                </Grid>
                
            </Container>
        </Box>
    );
}

export default Banner;