import { Box, Container, Stack, Typography, Grid } from '@mui/material';
import Project from './project';
import { PROJECTS } from '../../constants';


const Projects = () => (
    <>
    
    <Box sx={{ bgcolor: 'white',  minHeight: '500', alignItems: 'center', justifyContent: 'center', display: 'flex', mt: 5, mb: 10}} >
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
                                Projects
                                    
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
                                freelancing project portfolio
                    </Typography>
                </Stack>

                <Grid container direction="row" spacing={2}>
                { PROJECTS.map((proj) => (
                        <Grid item xs={12} lg={4} key={1}>
                                <Project 
                                    key={proj.id}
                                    initial={proj.initial}
                                    title={proj.title}
                                    subtitle={proj.subtitle}
                                    image={proj.image}
                                    summary={proj.summary}
                                    description={proj.description}
                                    giturl={proj.giturl}
                                />
                        </Grid>
                ))}         
                </Grid>
        </Container>
    </Box>
    </>
);

export default Projects;