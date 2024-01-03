import React from 'react'
import { Container, Typography, Breadcrumbs, Link } from '@mui/material';
import Projects from './projects';
import { Helmet } from 'react-helmet';

const Portfolio = () => {
  return (
    <>
        <Helmet>
          <title>Prshete.com | Projects </title>
          <meta name="description" content="Freelancer Python Backend Developer" />
          <meta name="keywords" content="Freelancer Python Backend Developer, Python Remote Backend Developer" />
          <meta name="author" content="Purushottam Shete" />
        </Helmet>
        <Container maxWidth="lg">
            <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="/">
                    Home
                </Link>
            
                <Typography color="text.primary">Projects</Typography>
            </Breadcrumbs>
        </Container>

        <Projects />
    </>
  )
}

export default Portfolio