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
import { SiKubernetes } from "react-icons/si";

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
 
                    <Grid item xs={3} lg={1} key={1}>
                        <FaPython size={60} color="#0093E9"/>
                    </Grid>
                    <Grid item xs={3} lg={1} key={2}>
                        <DiDjango size={60}/>
                    </Grid>
                    <Grid item xs={3} lg={1} key={3}>
                        <SiFlask size={60}/>
                    </Grid>
                    <Grid item xs={3} lg={1} key={4} >
                        <SiFastapi size={60}/>
                    </Grid>
                    <Grid item xs={3} lg={1} key={5} >
                        <TbBrandJavascript size={60}/>
                    </Grid>
                    <Grid item xs={3} lg={1} key={6} >
                        <FaReact size={60}/>
                    </Grid>
                    <Grid item xs={3} lg={1} key={7} >
                        <FaDocker size={60}/>
                    </Grid>
                    <Grid item xs={3} lg={1} key={8} >
                        <SiMysql size={60}/>
                    </Grid>
                    <Grid item xs={3} lg={1} key={9} >
                        <BiLogoPostgresql size={60}/>
                    </Grid>
                    <Grid item xs={3} lg={1} key={10} >
                        <SiMongodb size={60}/>
                    </Grid>
                    <Grid item xs={3} lg={1} key={11} >
                        <SiRos size={60}/>
                    </Grid>
                    <Grid item xs={3} lg={1} key={12} >
                        <SiOpencv size={60}/>
                    </Grid>
                    <Grid item xs={3} lg={1} key={13} >
                        <FaAws size={60}/>
                    </Grid>
                    <Grid item xs={3} lg={1} key={14} >
                        <SiMicrosoftazure size={60}/>
                    </Grid>
                    <Grid item xs={3} lg={1} key={15} >
                        <SiGooglecloud size={60}/>
                    </Grid>
                    <Grid item xs={3} lg={1} key={16} >
                        <IoLogoAndroid size={60}/>
                    </Grid>
                    <Grid item xs={3} lg={1} key={17} >
                        <FaApple size={60}/>
                    </Grid>
                    <Grid item xs={3} lg={1} key={18} >
                        <TbBrandReactNative size={60}/>
                    </Grid>
                    <Grid item xs={3} lg={1} key={19} >
                        <TbBrandCpp size={60}/>
                    </Grid>
                    <Grid item xs={3} lg={1} key={20} >
                        <FaGithub size={60}/>
                    </Grid>
                    <Grid item xs={3} lg={1} key={21} >
                        <SiGithubactions size={60}/>
                    </Grid>
                    <Grid item xs={3} lg={1} key={22} >
                        <FaJenkins size={60}/>
                    </Grid>
                    <Grid item xs={3} lg={1} key={23} >
                        <SiAnsible size={60}/>
                    </Grid>
                    <Grid item xs={3} lg={1} key={24} >
                        <SiKubernetes size={60}/>
                    </Grid>
                    <Grid item xs={3} lg={1} key={25} >
                        <SiTensorflow size={60}/>
                    </Grid>
                    <Grid item xs={3} lg={1} key={26} >
                        <SiScikitlearn size={60}/>
                    </Grid>
                    <Grid item xs={3} lg={1} key={27} >
                        <SiPytorch size={60}/>
                    </Grid>
                    <Grid item xs={3} lg={1} key={28} >
                        <SiScipy size={60}/>
                    </Grid>
                    <Grid item xs={3} lg={1} key={29} >
                        <SiNumpy size={60}/>
                    </Grid>
                    <Grid item xs={3} lg={1} key={30} >
                        <SiPandas size={60}/>
                    </Grid>
                    <Grid item xs={3} lg={1} key={31} >
                        <FaRaspberryPi size={60}/>
                    </Grid>
                    <Grid item xs={3} lg={1} key={32} >
                        <SiArduino size={60}/>
                    </Grid>
                    <Grid item xs={3} lg={1} key={33} >
                        <SiMqtt size={60}/>
                    </Grid>
                    <Grid item xs={3} lg={1} key={34} >
                        <GrGraphQl size={60}/>
                    </Grid>
                    <Grid item xs={3} lg={1} key={35} >
                        <DiRedis size={60}/>
                    </Grid>
                    <Grid item xs={3} lg={1} key={36} >
                        <SiApachekafka size={60}/>
                    </Grid>
                    
                    
                    

                </Grid>
                
            </Container>
            
        </Box>
    );
}

export default Technologies;