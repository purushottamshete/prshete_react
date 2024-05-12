import React from 'react';
import Container from "@mui/material/Container";
import { Avatar, Box, Grid, Typography } from '@mui/material';
import { py } from '../../constants';
import Button from '@mui/material/Button';
import { GitHub, Twitter } from "@mui/icons-material";

const Banner = () => {
    return (
        <Box sx={{ bgcolor: 'grey.100',  height: {lg: '600px', xs: '650px'}, alignItems: 'center', justifyContent: 'center', display: 'flex'}}>
            <Container maxWidth="lg">
                <Grid container spacing={2} justifyContent="center">
                        <Grid item lg={6} sx={{display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Avatar alt="Python" src={py} 
                                    sx={{
                                            width: {
                                                lg: 400,
                                                xs: 300,
                                            },
                                            height: {
                                                lg: 400,
                                                xs: 300,
                                            }, 
                                            border: {
                                                lg: 15, 
                                                xs: 10,
                                            },
                                            borderColor: {
                                                lg: 'white',
                                                xs: 'white',
                                            }, 
                                            justifyContent: 'center', 
                                            alignItems: 'center' }}/>
                        </Grid>
                        <Grid item lg={6} sx={{textAlign: { md: 'left', xs: 'center' } , alignItems: 'center', justifyContent: 'center', mt: 2, }}>
                            <br/>
                            
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
                                marginBottom: 5,
                                }}
                            >
                                Hi,
                            </Typography>
                            <Typography
                                variant="h2"
                                sx={{
                                fontFamily: 'Montserrat,sans-serif',
                                fontWeight: 900,
                                fontSize: {
                                    lg: 45,
                                    xs: 30
                                },
                                color: 'inherit',
                                textDecoration: 'none',
                                }}
                            >
                                We Provide...
                            </Typography>
                            <Typography
                                variant="h1"
                                sx={{
                                fontFamily: 'Montserrat,sans-serif',
                                fontWeight: 900,
                                fontSize: {
                                    lg: 40,
                                    xs: 23,
                                },
                                color: 'orange',
                                textDecoration: 'none',
                                }}
                            >
                                Python Specialised
                                {/* <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed once, initially
                                    'Freelancer Backend Developer',
                                    1000,
                                    // 'Teacher',
                                    // 1000,
                                ]}
                                speed={50}
                                //style={{ fontSize: '50px', fontWeight: 900, color: 'orange' }}
                                repeat={Infinity}
                                /> */}
                            </Typography>
                            <Typography
                                variant="h3"
                                sx={{
                                    fontFamily: 'Montserrat,sans-serif',
                                    fontWeight: 800,
                                    color: 'gray',
                                    textDecoration: 'none',
                                    textDecorationColor: 'gray',
                                    fontSize: {
                                        lg: 45,
                                        xs: 30
                                    },
                                }}
                            >
                                Software Services
                            </Typography>
                            
                        </Grid>
                </Grid>
                
            </Container>
        </Box>
    );
}

export default Banner;