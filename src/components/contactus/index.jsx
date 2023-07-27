import React from 'react';
import { Container, Typography, Box} from '@mui/material';
import EmailContactForm from './email_contact_form';

const ContactUs = () => {
    return (
        <>
        <Box sx={{ bgcolor: 'grey.100',  height: '600px', alignItems: 'center', justifyContent: 'center', display: 'flex'}}>
            <Container maxWidth="lg" sx={{justifyContent: 'center'}}>
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