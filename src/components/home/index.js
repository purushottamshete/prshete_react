import React from 'react';
import Banner from './banner'
import Services from './services';
import Courses from '../learn/courses';

const Home = () => {
    return (
        <>
            <Banner />
            <Services />
            <Courses />
        </>
    );
}

export default Home;