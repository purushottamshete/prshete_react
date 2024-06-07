import React from 'react';
import Container from "@mui/material/Container";
import { Avatar, Box, Grid, Typography, Stack } from '@mui/material';
import { py } from '../../constants';
import { FaPython } from "react-icons/fa";

const Banner = () => {
    return (
        <Box sx={{ bgcolor: 'white',  height: {lg: '600px', xs: '670px'}, alignItems: 'center', justifyContent: 'center', display: 'flex', mt:5}}>
            <Container maxWidth="lg">
                <Grid container spacing={2} >
                        <Grid item lg={6} sx={{ mt: 5}}>
                            <Stack >     
                            <FaPython size={30} color="#0093E9"/>
                            <Typography
                                variant="h2"
                                sx={{
                                fontFamily: 'Montserrat,sans-serif',
                                fontWeight: 700,
                                fontSize: {
                                    lg: 28,
                                    xs: 17
                                },
                                color: 'black',
                                textDecoration: 'none',
                                mb:3
                                }}
                            >
                                Python Specialised
                            </Typography>
                            <Typography
                                variant="h2"
                                sx={{
                                fontFamily: 'Montserrat,sans-serif',
                                fontWeight: 800,
                                fontSize: {
                                    lg: 50,
                                    xs: 40,
                                },
                                color: 'black',
                                textDecoration: 'none',
                                textShadow: 2,
                                mb: 10
                                }}
                            >
                                SOFTWARE SERVICES
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
                                variant="h4"
                                sx={{
                                    fontFamily: 'Montserrat,sans-serif',
                                    fontWeight: 500,
                                    color: '#fb8c00',
                                    textDecoration: 'none',
                                    textDecorationColor: 'gray',
                                    fontSize: {
                                        lg: 25,
                                        xs: 17
                                    },
                                }}
                            >
                                <b>Hire your technology team with the top <br/>
                                Indian Talent.</b> <small style={{color:"gray"}}> Remote engineers that provide high quality work as if they were in your office.</small>
                            </Typography>
                            </Stack>
                        </Grid>
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
                                            justifyContent: 'center', 
                                            alignItems: 'center' }}/>
                        </Grid>
                </Grid>
                
            </Container>
        </Box>
    );
}

export default Banner;