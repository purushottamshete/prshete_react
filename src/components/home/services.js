import React from 'react';
import Container from "@mui/material/Container";
import { Box, Grid, Typography, Stack } from '@mui/material';
import ServiceButton from './serviceButton';
import Slide from '@mui/material/Slide';
import {services} from '../../constants';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const Services = () => {
    const [open, setOpen] = React.useState(false);
    const [service, setService] = React.useState(() => ({}));

    const handleClickOpen = (val) => {
        setOpen(true);
        setService(() => (val));
    };

    const handleClose = () => {
        setOpen(false);
        setService(() => ({}));
    };

    return (
        <Box sx={{ bgcolor: '#f5f5f5',  minHeight: '600', alignItems: 'center', justifyContent: 'center', display: 'flex', py: 10 }}>
            <Container maxWidth="lg">
                <Stack sx ={{alignItems: 'center', justifyContent: 'center', mb: 2}}>
                    <Typography
                                variant="h2"
                                sx={{
                                    fontFamily: 'Poppins,sans-serif',
                                    fontWeight: {
                                        lg: 700,
                                        xs: 700
                                    },
                                    fontSize: {
                                        lg: 50,
                                        xs: 30
                                    },
                                    color: 'inherit',
                                    textDecoration: 'none',
                                    textShadow: 2,
                                    alignItems: 'center', 
                                    justifyContent: 'center',
                                    mb: 2
                                }}
                            >
                                How we can collaborate?
                    </Typography>
                    <Typography
                                variant="p"
                                sx={{
                                    fontFamily: 'Montserrat,sans-serif',
                                    fontWeight: {
                                        lg: 300,
                                        xs: 300
                                    },
                                    fontSize: {
                                        lg: 20,
                                        xs: 15
                                    },
                                    color: 'inherit',
                                    textDecoration: 'none',
                                    textAlign: 'center',
                                    px: {
                                        lg: 33,
                                        xs: 6,
                                    },
                                    mb: 2,
                                }}
                            >
                                Ways to engage our professional software services.
                    </Typography>
                </Stack>

                <Grid container spacing={2} direction="row">
                    { services.map((serv) => (
                        <Grid item xs={12} lg={4} key={serv.title}>

                                <ServiceButton 
                                    image={serv.image}
                                    title={serv.title}
                                    text={serv.text}
                                    benifits={serv.benifits}
                                    open={open}
                                    onClick={() => handleClickOpen(serv)}
                                />
                        </Grid>
                    ))}   
                        
                        
                </Grid>
                
            </Container>
            
        </Box>
    );
}

export default Services;