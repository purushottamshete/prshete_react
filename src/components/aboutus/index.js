import React from 'react';
import { Box, Container, Typography, Breadcrumbs, Link } from '@mui/material';
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
        <Box sx={{ bgcolor: 'grey.100',  height: { lg: '500px', xs: '650px' }, alignItems: 'center', justifyContent: 'center', display: 'flex'}}>
            <Container maxWidth="lg">
                <Typography
                    variant="h1"
                    sx={{
                    fontFamily: 'Montserrat,sans-serif',
                    fontWeight: 900,
                    color: 'inherit',
                    textDecoration: 'none',
                    fontSize: {
                        lg: 40,
                        xs: 30
                    },
                    mt: 1,
                    mb: 1,
                    }}
                >       
                    About Us
                </Typography>
                <Typography
                    variant="span"
                    sx={{
                    fontFamily: 'Montserrat,sans-serif',
                    fontWeight: 400,
                    color: 'inherit',
                    textDecoration: 'none',
                    fontWeight: {
                        lg: 300,
                        xs: 300
                    },
                    fontSize: {
                        lg: 20,
                        xs: 15
                    },
                    mt: 2,
                    mb: 2,
                    }}
                >       
                    At PRSTech, we are dedicated to delivering innovative IT solutions tailored to meet the unique needs of our clients. With a focus on excellence and customer satisfaction, we strive to be the trusted partner that businesses can rely on for all their technology needs.
                    <br/><br/>

                    Founded in <b>2016</b>, PRSTech has quickly grown into a leading provider of IT services, serving clients around the globe. Our team of skilled professionals brings together a wealth of experience and expertise in various areas of technology, allowing us to deliver cutting-edge solutions that drive business growth and success.
                    <br/><br/>

                    Our commitment to excellence extends beyond just delivering great technology solutions. We also prioritize customer service and satisfaction, ensuring that our clients receive the highest level of support and attention throughout their engagement with us. With PRSTech, you can trust that you're not just getting a vendor – <b>you're getting a partner invested in your success</b>.
                </Typography>
            </Container>
        </Box>
        </>
    );
}

export default AboutUs;