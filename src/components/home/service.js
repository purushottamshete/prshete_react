import React from 'react';
import { Typography } from '@mui/material';

const Service = ({title, icon, text }) => {
    return (
        <>
            <Typography sx={{ mt: 1, flex: 1 }} variant="h3">
                {title}
            </Typography>
            <hr / >
            <Typography sx={{ mt: 1, flex: 1 }} variant="p">
                {text}
            </Typography>
        </>
    );
}

export default Service;