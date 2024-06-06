import React from 'react';
import Container from "@mui/material/Container";
import { Box, Grid, Typography, Stack } from '@mui/material';
import { FaPython } from "react-icons/fa";
import { DiDjango } from "react-icons/di";
import { SiFlask } from "react-icons/si";
import { SiFastapi } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";
import { SiRos } from "react-icons/si";
import { SiOpencv } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { SiMicrosoftazure } from "react-icons/si";
import { SiGooglecloud } from "react-icons/si";
import { IoLogoAndroid } from "react-icons/io";
import { FaApple } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { TbBrandCpp } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { SiGithubactions } from "react-icons/si";
import { FaJenkins } from "react-icons/fa";
import { SiAnsible } from "react-icons/si";
import { SiTensorflow } from "react-icons/si";
import { SiScikitlearn } from "react-icons/si";
import { SiPytorch } from "react-icons/si";
import { SiScipy } from "react-icons/si";
import { SiNumpy } from "react-icons/si";
import { SiPandas } from "react-icons/si";
import { FaRaspberryPi } from "react-icons/fa";
import { SiArduino } from "react-icons/si";
import { SiMqtt } from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";
import { DiRedis } from "react-icons/di";
import { SiApachekafka } from "react-icons/si";

const Technologies = () => {

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
                                We Work With
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
                                Latest Technologies
                    </Typography>
                </Stack>

                <Grid container spacing={2} direction="row">
 
                    <Grid item xs={3} lg={1}>
                        <FaPython size={70}/>
                    </Grid>
                    <Grid item xs={3} lg={1}>
                        <DiDjango size={70}/>
                    </Grid>
                    <Grid item xs={3} lg={1}>
                        <SiFlask size={70}/>
                    </Grid>
                    <Grid item xs={3} lg={1} >
                        <SiFastapi size={70}/>
                    </Grid>
                    <Grid item xs={3} lg={1} >
                        <TbBrandJavascript size={70}/>
                    </Grid>
                    <Grid item xs={3} lg={1} >
                        <FaReact size={70}/>
                    </Grid>
                    <Grid item xs={3} lg={1} >
                        <FaDocker size={70}/>
                    </Grid>
                    <Grid item xs={3} lg={1} >
                        <SiMysql size={70}/>
                    </Grid>
                    <Grid item xs={3} lg={1} >
                        <BiLogoPostgresql size={70}/>
                    </Grid>
                    <Grid item xs={3} lg={1} >
                        <SiMongodb size={70}/>
                    </Grid>
                    <Grid item xs={3} lg={1} >
                        <SiRos size={70}/>
                    </Grid>
                    <Grid item xs={3} lg={1} >
                        <SiOpencv size={70}/>
                    </Grid>
                    <Grid item xs={3} lg={1} >
                        <FaAws size={70}/>
                    </Grid>
                    <Grid item xs={3} lg={1} >
                        <SiMicrosoftazure size={70}/>
                    </Grid>
                    <Grid item xs={3} lg={1} >
                        <SiGooglecloud size={70}/>
                    </Grid>
                    <Grid item xs={3} lg={1} >
                        <IoLogoAndroid size={70}/>
                    </Grid>
                    <Grid item xs={3} lg={1} >
                        <FaApple size={70}/>
                    </Grid>
                    <Grid item xs={3} lg={1} >
                        <TbBrandReactNative size={70}/>
                    </Grid>
                    <Grid item xs={3} lg={1} >
                        <TbBrandCpp size={70}/>
                    </Grid>
                    <Grid item xs={3} lg={1} >
                        <FaGithub size={70}/>
                    </Grid>
                    <Grid item xs={3} lg={1} >
                        <SiGithubactions size={70}/>
                    </Grid>
                    <Grid item xs={3} lg={1} >
                        <FaJenkins size={70}/>
                    </Grid>
                    <Grid item xs={3} lg={1} >
                        <SiAnsible size={70}/>
                    </Grid>
                    <Grid item xs={3} lg={1} >
                        <SiTensorflow size={70}/>
                    </Grid>
                    <Grid item xs={3} lg={1} >
                        <SiScikitlearn size={70}/>
                    </Grid>
                    <Grid item xs={3} lg={1} >
                        <SiPytorch size={70}/>
                    </Grid>
                    <Grid item xs={3} lg={1} >
                        <SiScipy size={70}/>
                    </Grid>
                    <Grid item xs={3} lg={1} >
                        <SiNumpy size={70}/>
                    </Grid>
                    <Grid item xs={3} lg={1} >
                        <SiPandas size={70}/>
                    </Grid>
                    <Grid item xs={3} lg={1} >
                        <FaRaspberryPi size={70}/>
                    </Grid>
                    <Grid item xs={3} lg={1} >
                        <SiArduino size={70}/>
                    </Grid>
                    <Grid item xs={3} lg={1} >
                        <SiMqtt size={70}/>
                    </Grid>
                    <Grid item xs={3} lg={1} >
                        <GrGraphQl size={70}/>
                    </Grid>
                    <Grid item xs={3} lg={1} >
                        <DiRedis size={70}/>
                    </Grid>
                    <Grid item xs={3} lg={1} >
                        <SiApachekafka size={70}/>
                    </Grid>
                    
                    
                    

                </Grid>
                
            </Container>
            
        </Box>
    );
}

export default Technologies;