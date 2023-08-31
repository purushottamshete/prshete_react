import React from 'react';
import { Container, Typography, Breadcrumbs, Link } from '@mui/material';
import {COURSES} from '../../constants';
import CourseDetails from './courseDetails'
const COURSE = COURSES[0]

const PythonBasicsLive = () => {
    return (
        <>
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
                    <Typography color="text.primary">Python-Basic-Live</Typography>
                </Breadcrumbs>
            </Container>
            <CourseDetails COURSE={COURSE} />
        </>
    );
}

export default PythonBasicsLive;