import React from 'react';
import { Container, Typography, Breadcrumbs, Link } from '@mui/material';
import {COURSES} from '../../constants';
import CourseDetails from './courseDetails'
import { Helmet } from 'react-helmet';

const COURSE = COURSES[1]
const PythonAdvanceLive = () => {
    return (
        <>
            <Helmet>
            <title>Prshete.com | Learn Python Advance Live </title>
            <meta name="description" content="Learn Python Advance Live" />
            <meta name="keywords" content="Learn Python Advance Live" />
            <meta name="author" content="Purushottam Shete" />
            </Helmet>
            <Container maxWidth="lg">
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="/">
                        Home
                    </Link>
                    <Link
                    underline="hover"
                    color="inherit"
                    href="/learn"
                    >
                    Learn
                    </Link>
                    <Typography color="text.primary">Python-Advance-Live</Typography>
                </Breadcrumbs>
            </Container>
            <CourseDetails COURSE={COURSE} />
        </>
    );
}

export default PythonAdvanceLive;