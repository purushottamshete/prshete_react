import React from 'react';
import { Container, Typography, Breadcrumbs, Link } from '@mui/material';
import Banner from './banner';
import { Helmet } from 'react-helmet';

const AboutUs = () => {
    return (
        <>
        <Helmet>
          <title>PRSTech.io | About Us </title>
          <meta name="description" content="Contact Us PRSTech.io" />
          <meta name="keywords" content="Contact Us PRSTech.io" />
          <meta name="author" content="PRShete Technologies Pvt. Ltd." />
        </Helmet>
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