import React from 'react'
import { Container, Typography, Breadcrumbs, Link } from '@mui/material';
import Projects from './projects';

const Portfolio = () => {
  return (
    <>
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