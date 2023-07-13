import React from 'react';

const Service = ({title, icon, text }) => {
    return (
        <>
            <h1> {title}</h1>
            <hr / >
            <p> {text}</p>
        </>
    );
}

export default Service;