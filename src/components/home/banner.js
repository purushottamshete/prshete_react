import React from 'react';
import Container from "@mui/material/Container";
import { Avatar, Box, Grid, Typography } from '@mui/material';
import { puru } from '../../constants';
import Button from '@mui/material/Button';
import { GitHub, Twitter } from "@mui/icons-material";

const Banner = () => {
    return (
        <Box sx={{ bgcolor: 'grey.100',  height: '700px', alignItems: 'center', justifyContent: 'center', display: 'flex'}}>
            <Container maxWidth="lg">
                <Grid container spacing={2} justifyContent="center">
                        <Grid item lg={6} sx={{display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Avatar alt="Purushottam Shete" src={puru} 
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
                                I'm Purushottam
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
                                Freelancer Backend Developer
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
                                based in India.
                            </Typography>
                            <Grid item lg={12} sx={{textAlign: { md: 'left', xs: 'center' } , alignItems: 'center', justifyContent: 'center', mt: 2, }}>
                            <Button variant="outlined" size="small" startIcon={<GitHub />} sx={{ mr: 2}} href='https://github.com/purushottamshete' color="info">
                                GitHub
                            </Button>
                            <Button variant="outlined" size="small" startIcon={<Twitter />} sx={{ mr: 2}} href='https://twitter.com/purushottamshet' color="info">
                                Twitter
                            </Button>
                            </Grid>
                        </Grid>
                </Grid>
                
            </Container>
        </Box>
    );
}

export default Banner;