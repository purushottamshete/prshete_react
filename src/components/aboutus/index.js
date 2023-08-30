import React from 'react';
import { Container, Typography, Breadcrumbs, Link } from '@mui/material';
import Banner from './banner';
const AboutUs = () => {
    return (
        <>
        <Container maxWidth="lg" justifyContent="left" alignItems="left">
            <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="/">
                    Home
                </Link>
            
                <Typography color="text.primary">About</Typography>
            </Breadcrumbs>
        </Container>
        <Banner />
        </>
    );
}

export default AboutUs;