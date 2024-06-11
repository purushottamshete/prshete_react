import React from 'react';
import { Container, Typography, Breadcrumbs, Link, Box } from '@mui/material';
import { Helmet } from 'react-helmet';
import { InlineWidget } from "react-calendly";

const BookCall = () => {
    return (
        <>
            <Helmet>
            <title>Book Call | Prstech.io </title>
            <meta name="description" content="Book Call With PRSTech.io" />
            <meta name="keywords" content="Book Call With PRSTech.io" />
            <meta name="author" content="PRSTech.io" />
            </Helmet>
            <Container maxWidth="lg" sx={{mt:10}}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="/">
                        Home
                    </Link>
                    <Typography color="text.primary">Book Call</Typography>
                </Breadcrumbs>
            </Container>
            <Box sx={{ bgcolor: 'white',  height: { lg:'700px', xs: '750px'}, alignItems: 'center', justifyContent: 'center', display: 'flex'}}>
                <Container maxWidth="lg" sx={{textAlign: 'center'}}> 
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
                        Book Call
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
                        mb: 1,
                        }}
                    >       
                        Get to know our Eachother, Tech Stack, Team, Terms of Engagement, Selection Process, Pricing, etc. 
                    </Typography>
                    <InlineWidget url="https://calendly.com/prstech"/>
                </Container>
            </Box>
        </>
    );
}

export default BookCall;