import React from 'react';
import Banner from './banner'
import Porjects from '../projects/projects';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Prshete.com | Home </title>
                <meta name="description" content="Freelancer Python Backend Developer" />
                <meta name="keywords" content="Freelancer Python Backend Developer, Remote Python Backend Developer" />
                <meta name="author" content="Purushottam Shete" />
            </Helmet>
            <Banner />
            <Porjects />
        </>
    );
}

export default Home;