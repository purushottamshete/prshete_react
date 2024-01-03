import React  from 'react';
import { Container, Typography, Breadcrumbs, Link } from '@mui/material';
import Courses from "./courses";
import { Helmet } from 'react-helmet';

const Learn = () => {    
    return (
        <>
            <Helmet>
                <title>Prshete.com | Learn </title>
                <meta name="description" content="Learn Python Programming with Purushottam Shete" />
                <meta name="keywords" content="Learn Python Programming Pythoncoding" />
                <meta name="author" content="Purushottam Shete" />
            </Helmet>
            <Container maxWidth="lg">
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="/">
                        Home
                    </Link>
                
                    <Typography color="text.primary">Learn</Typography>
                </Breadcrumbs>
            </Container>

            < Courses />
        </>
    );
}

export default Learn;