import React from 'react';
import EmailContactForm from './email_contact_form';
import { Box, Container, Typography, Breadcrumbs, Link } from '@mui/material';
import { Helmet } from 'react-helmet';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const ContactUs = () => {
    return (
        <>
        <Helmet>
          <title>PRSTech.io | Contact Us </title>
          <meta name="description" content="Contact Us PRSTech.io" />
          <meta name="keywords" content="Contact Us PRSTech.io" />
          <meta name="author" content="PRShete Technologies Pvt. Ltd." />
        </Helmet>
        <Container maxWidth="lg">
            <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="/">
                    Home
                </Link>
            
                <Typography color="text.primary">Contact</Typography>
            </Breadcrumbs>
        </Container>
        <Box sx={{ bgcolor: 'grey.100',  height: '700px', alignItems: 'center', justifyContent: 'center', display: 'flex'}}>
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
                    Contact Us
                </Typography>
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
                    mb: 2,
                    }}
                >       
                    Send us your query
                </Typography>
                <EmailContactForm />
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
                    Offices
                </Typography>
                <Typography
                    variant="span"
                    sx={{
                    fontFamily: 'Montserrat,sans-serif',
                    fontWeight: 600,
                    color: 'gray',
                    textDecoration: 'none',
                    fontSize: {
                        lg: 15,
                        xs: 10
                    },
                    mb: 2,
                    }}
                >   
                    <b>(India)</b> <br/>
                    <b>Corporate</b>: 113, Sai Vision, Pimple Saudagar, Pune, India.<br/>
                    <b>Registered</b>: Wing A, Rose E Mehar, Rahatani, Pune, India.<br/><br/>
                    <b>(Europe)</b> <br/>
                    Hoofdweg, 1058AW, Amsterdam, Noord Holland, The Netherlands.<br/><br/>
                </Typography>
                
            </Container>
        </Box>
        </>
    );
}

export default ContactUs;