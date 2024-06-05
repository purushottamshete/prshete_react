import React from 'react';
import Container from "@mui/material/Container";
import { Box, Grid, Typography, Stack } from '@mui/material';
import SpecialityButton from './specialityButton';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import {specialities} from '../../constants';
import Special from './special';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const Speciality = () => {
    const [open, setOpen] = React.useState(false);
    const [specilality, setSpecilality] = React.useState(() => ({}));

    const handleClickOpen = (val) => {
        setOpen(true);
        setSpecilality(() => (val));
    };

    const handleClose = () => {
        setOpen(false);
        setSpecilality(() => ({}));
    };

    return (
        <Box sx={{ bgcolor: 'white',  minHeight: '500', alignItems: 'center', justifyContent: 'center', display: 'flex', my: 10}}>
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
                                    mb: 2
                                }}
                            >
                                Our Services
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
                                Professional software services delivering tailored solutions to meet your business needs.
                    </Typography>
                </Stack>

                <Grid container spacing={2} direction="row">
                    { specialities.map((spl) => (
                        <Grid item xs={12} lg={4} key={spl.title}>

                                <SpecialityButton 
                                    icon={spl.icon}
                                    title={spl.title}
                                    body={spl.button_text}
                                    open={open}
                                    onClick={() => handleClickOpen(spl)}
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
                        {specilality.title}
                        </Typography>
                        <Button autoFocus color="inherit" onClick={handleClose}>
                        Close
                        </Button>
                    </Toolbar>
                </AppBar>
                <Container maxWidth="lg">
                    <Special 
                        title={specilality.title} 
                        icon={specilality.icon}
                        text={specilality.modal_text}
                    />
                </Container>
            </Dialog>
        </Box>
    );
}

export default Speciality;