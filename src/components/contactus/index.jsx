import React from 'react';
import { Container } from '@mui/material';
import EmailContactForm from './email_contact_form';

const ContactUs = () => {
    return (
        <>
        <Container maxWidth="lg" sx={{justifyContent: 'center'}}>
            <h1>Contact Us</h1>
            <p>Send me your details</p>
            <EmailContactForm />
        </Container>
        </>
    );
}

export default ContactUs;