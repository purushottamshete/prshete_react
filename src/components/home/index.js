import React from 'react';
import Banner from './banner'
import Technologies from './technologies';
import Services from './services';
import Speciality from './speciality';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>PRSTech.io | Home </title>
                <meta name="description" content="PRSTech Python-specialised Software Services" />
                <meta name="keywords" content="PRSTech Python-specialised Software Services, Python Developers on Contract" />
                <meta name="author" content="PRShete Technologies Pvt. Ltd." />
            </Helmet>
            <Banner />
            <Services />
            <Speciality />
            <Technologies />
        </>
    );
}

export default Home;