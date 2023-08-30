import React from 'react';
import { Container, Typography, Breadcrumbs, Link } from '@mui/material';
import Courses from "./courses";

const Learn = () => {
    return (
        <>
            <Container maxWidth="lg" justifyContent="left" alignItems="left">
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