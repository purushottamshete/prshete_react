import { Box, Container, Stack, Typography, Grid } from '@mui/material';
import Course from './course';
import {COURSES} from '../../constants';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';


const Courses = () => (
    <>
    
    <Box sx={{ bgcolor: 'white',  minHeight: '500', alignItems: 'center', justifyContent: 'center', display: 'flex', mt: 2, mb: 10}} >
        <Container maxWidth="lg" justifyContent="center" alignItems="center">
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
                                Learn and Grow 
                                    <TrendingUpIcon sx={{
                                    fontWeight: {
                                        lg: 700,
                                        xs: 700
                                    },
                                    fontSize: {
                                        lg: 50,
                                        xs: 30
                                    },
                                    }}/>
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
                                Live Sessions from Industry Professional.
                    </Typography>
                </Stack>

                <Grid container direction="row">
                    { COURSES.map((crs) => (
                        <Grid item xs={12} lg={4} key={crs.title} justifyContent="center" alignItems="center">
                                <Course 
                                    title={crs.title}
                                    image={crs.image}
                                    description={crs.description}
                                    hours={crs.hours}
                                    url={crs.url}
                                />
                        </Grid>
                    ))}   
                        
                        
                </Grid>
        </Container>
    </Box>
    </>
);

export default Courses;