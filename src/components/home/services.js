import React from 'react';
import Container from "@mui/material/Container";
import { Box, Grid, Typography, Stack } from '@mui/material';
import ServiceButton from './serviceButton';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import {services} from '../../constants';
import Service from './service';

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
        <Box sx={{ bgcolor: 'white',  minHeight: '500px', alignItems: 'center', justifyContent: 'center', display: 'flex', my: 10}}>
            <Container maxWidth="lg">
                <Stack sx ={{alignItems: 'center', justifyContent: 'center', mb: 2}}>
                    <Typography
                                variant="h2"
                                sx={{
                                    fontFamily: 'Poppins,sans-serif',
                                    fontWeight: 700,
                                    fontSize: {
                                        lg: 60,
                                        xs: 40
                                    },
                                    color: 'inherit',
                                    textDecoration: 'none',
                                    textShadow: 2,
                                    mb: 2
                                }}
                            >
                                My Awesome Services
                    </Typography>
                    <Typography
                                variant="p"
                                sx={{
                                    fontFamily: 'Montserrat,sans-serif',
                                    fontWeight: 300,
                                    fontSize: {
                                        lg: 18,
                                        xs: 12
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
                                This is some text we want to add about the services we provide, and some minor details about it
                    </Typography>
                </Stack>

                <Grid container spacing={2} justifyContent="center">
                    { services.map((serv) => (
                        <Grid item xs={12} lg={4}>

                                <ServiceButton 
                                    icon={serv.icon}
                                    title={serv.title}
                                    body={serv.button_text}
                                    open={open}
                                    onClick={() => handleClickOpen(serv)}
                                />
                        </Grid>
                    ))}   
                        
                        
                </Grid>
                
            </Container>
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <AppBar sx={{ position: 'relative' }}>
                    <Toolbar>
                        <IconButton
                        edge="start"
                        color="inherit"
                        onClick={handleClose}
                        aria-label="close"
                        >
                        <CloseIcon />
                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                        {service.title}
                        </Typography>
                        <Button autoFocus color="inherit" onClick={handleClose}>
                        Close
                        </Button>
                    </Toolbar>
                </AppBar>
                <Container maxWidth="lg">
                    <Service 
                        title={service.title} 
                        icon={service.icon}
                        text={service.modal_text}
                    />
                </Container>
            </Dialog>
        </Box>
    );
}

export default Services;