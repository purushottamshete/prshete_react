import React from 'react';
import Container from "@mui/material/Container";
import { Avatar, Box, Grid, Typography } from '@mui/material';
import { puru } from '../../constants';

const Banner = () => {
    return (
        <Box sx={{ bgcolor: 'grey.100',  height: '500px', alignItems: 'center', justifyContent: 'center', display: 'flex'}}>
            <Container maxWidth="lg">
                <Grid container spacing={0} justifyContent="center">
                        <Grid item lg={6} sx={{display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Avatar alt="Purushottam Shete" src={puru} variant='square'
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
                                                lg: 10, 
                                                xs: 5,
                                            },
                                            borderColor: {
                                                lg: 'white',
                                                xs: 'white',
                                            }, 
                                            justifyContent: 'center', 
                                            alignItems: 'center' }}/>
                        </Grid>
                        <Grid item lg={6} sx={{alignItems: 'center', justifyContent: 'center', mt: 2}}>
                            <br/>
                            <Typography
                                variant="span"
                                sx={{
                                fontFamily: 'Montserrat,sans-serif',
                                fontWeight: 700,
                                color: 'inherit',
                                textDecoration: 'none',
                                fontSize: {
                                    lg: 40,
                                    xs: 20
                                },
                                mb: 1
                                }}
                            >       
                                Purushottam Shete
                            </Typography>
                            <br/>
                            <Typography
                                variant="p"
                                sx={{
                                fontFamily: 'Montserrat,sans-serif',
                                fontWeight: 400,
                                fontSize: {
                                    lg: 20,
                                    xs: 10
                                },
                                color: 'inherit',
                                textDecoration: 'none',
                                }}
                            >
                                Postgraduated in Computer Application from Pune University. 


                            </Typography>
                            
                        </Grid>
                </Grid>
                
            </Container>
        </Box>
    );
}

export default Banner;