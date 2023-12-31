import React from 'react';
import EmailContactForm from './email_contact_form';
import { Box, Container, Typography, Breadcrumbs, Link } from '@mui/material';
import { Helmet } from 'react-helmet';

const ContactUs = () => {
    return (
        <>
        <Helmet>
          <title>Prshete.com | Contact </title>
          <meta name="description" content="Contact Purushottam Shete" />
          <meta name="keywords" content="Contact Purushottam Shete" />
          <meta name="author" content="Purushottam Shete" />
        </Helmet>
        <Container maxWidth="lg">
            <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="/">
                    Home
                </Link>
            
                <Typography color="text.primary">Contact</Typography>
            </Breadcrumbs>
        </Container>
        <Box sx={{ bgcolor: 'grey.100',  height: '600px', alignItems: 'center', justifyContent: 'center', display: 'flex'}}>
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
                    Contact Me
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
                    Send me your query
                </Typography>
                <EmailContactForm />
            </Container>
        </Box>
        </>
    );
}

export default ContactUs;