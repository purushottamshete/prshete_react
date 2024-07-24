import React from 'react';
import Container from "@mui/material/Container";
import { Avatar, Box, Grid, Typography, Stack, Button } from '@mui/material';
import { robotics } from '../../constants';
import { GiDeliveryDrone } from "react-icons/gi";
import SendIcon from '@mui/icons-material/Send';

const Banner = () => {
    return (
        <Box sx={{ bgcolor: 'white',  height: {lg: '600px', xs: '800px'}, alignItems: 'center', justifyContent: 'center', display: 'flex', mt:5}}>
            <Container maxWidth="lg">
                <Grid container spacing={2} >
                        <Grid item lg={6} sx={{ mt: 2}}>
                            <Stack >  
                            <br/>
                            <GiDeliveryDrone size={35} color="#0093E9" />
                            <Typography
                                variant="h2"
                                sx={{
                                fontFamily: 'Montserrat,sans-serif',
                                fontWeight: 700,
                                fontSize: {
                                    lg: 30,
                                    xs: 22
                                },
                                color: 'black',
                                textDecoration: 'none',
                                mb:3
                                }}
                            >
                                Software Services for
                            </Typography>
                            <Typography
                                variant="h2"
                                sx={{
                                fontFamily: 'Montserrat,sans-serif',
                                fontWeight: 800,
                                fontSize: {
                                    lg: 50,
                                    xs: 32,
                                },
                                color: 'black',
                                textDecoration: 'none',
                                textShadow: 2,
                                mb: 8
                                }}
                            >
                                Robotics Companies
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
                                        xs: 18
                                    },
                                }}
                            >
                                <b>Hire your technology team with the top <br/>
                                Indian Talent.</b> <small style={{color:"gray"}}> Remote engineers that provide high quality work as if they were in your office.</small>
                            </Typography>
                            <Button variant="contained" endIcon={<SendIcon />} href='/bookcall' size='large' sx={{my:1}}>Book call</Button>
                            </Stack>
                        </Grid>
                        <Grid item lg={6} sx={{display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Avatar alt="Python" src={robotics} 
                                    sx={{
                                            width: {
                                                lg: 400,
                                                xs: 300,
                                            },
                                            height: {
                                                lg: 500,
                                                xs: 400,
                                            },
                                            justifyContent: 'center', 
                                            alignItems: 'center' }}
                                            variant="square"/>
                        </Grid>
                </Grid>
                
            </Container>
        </Box>
    );
}

export default Banner;