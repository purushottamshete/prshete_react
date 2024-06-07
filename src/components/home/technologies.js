import React from 'react';
import Container from "@mui/material/Container";
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
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
                        <Tooltip title="Python" placement="top-start">
                        <IconButton>
                            <FaPython size={60} color="#0093E9"/>
                        </IconButton>
                        </Tooltip>
                    </Grid>
                    <Grid item xs={3} lg={1} key={2}>
                        <Tooltip title="Django" placement="top-start">
                        <IconButton  sx={{ color: "black", ":hover": {color: "#0093E9"}}}>
                            <DiDjango size={60}/>
                        </IconButton>
                        </Tooltip>
                    </Grid>
                    <Grid item xs={3} lg={1} key={3} >
                        <Tooltip title="Flask" placement="top-start">
                        <IconButton  sx={{ color: "black", ":hover": {color: "#0093E9"}}}>
                            <SiFlask size={60}/>
                        </IconButton>
                        </Tooltip>
                    </Grid>
                    <Grid item xs={3} lg={1} key={4} >
                        <Tooltip title="FastAPI" placement="top-start">
                        <IconButton  sx={{ color: "black", ":hover": {color: "#0093E9"}}}>
                            <SiFastapi size={60}/>
                        </IconButton>
                        </Tooltip>

                    </Grid>
                    <Grid item xs={3} lg={1} key={5} >
                        <Tooltip title="Javascript" placement="top-start">
                        <IconButton  sx={{ color: "black", ":hover": {color: "#0093E9"}}}>
                            <TbBrandJavascript size={60}/>
                        </IconButton>
                        </Tooltip>
                    </Grid>
                    <Grid item xs={3} lg={1} key={6} >
                        <Tooltip title="React" placement="top-start">
                        <IconButton  sx={{ color: "black", ":hover": {color: "#0093E9"}}}>
                            <FaReact size={60}/>
                        </IconButton>
                        </Tooltip>
                    </Grid>
                    <Grid item xs={3} lg={1} key={7} >
                        <Tooltip title="Docker" placement="top-start">
                        <IconButton  sx={{ color: "black", ":hover": {color: "#0093E9"}}}>
                            <FaDocker size={60}/>
                        </IconButton>
                        </Tooltip>
                    </Grid>
                    <Grid item xs={3} lg={1} key={8} >
                        <Tooltip title="Mysql" placement="top-start">
                        <IconButton  sx={{ color: "black", ":hover": {color: "#0093E9"}}}>
                            <SiMysql size={60}/>
                        </IconButton>
                        </Tooltip>
                    </Grid>
                    <Grid item xs={3} lg={1} key={9} >
                        <Tooltip title="Postgres" placement="top-start">
                        <IconButton  sx={{ color: "black", ":hover": {color: "#0093E9"}}}>
                            <BiLogoPostgresql size={60}/>
                        </IconButton>
                        </Tooltip>
                    </Grid>
                    <Grid item xs={3} lg={1} key={10} >
                        <Tooltip title="Mongodb" placement="top-start">
                        <IconButton  sx={{ color: "black", ":hover": {color: "#0093E9"}}}>
                            <SiMongodb size={60}/>
                        </IconButton>
                        </Tooltip>
                    </Grid>
                    <Grid item xs={3} lg={1} key={11} >
                        <Tooltip title="ROS" placement="top-start">
                        <IconButton  sx={{ color: "black", ":hover": {color: "#0093E9"}}}>
                            <SiRos size={60}/>
                        </IconButton>
                        </Tooltip>
                    </Grid>
                    <Grid item xs={3} lg={1} key={12} >
                        <Tooltip title="OpenCV" placement="top-start">
                        <IconButton  sx={{ color: "black", ":hover": {color: "#0093E9"}}}>
                            <SiOpencv size={60}/>
                        </IconButton>
                        </Tooltip>
                    </Grid>
                    <Grid item xs={3} lg={1} key={13} >
                        <Tooltip title="AWS" placement="top-start">
                        <IconButton  sx={{ color: "black", ":hover": {color: "#0093E9"}}}>
                            <FaAws size={60}/>
                        </IconButton>
                        </Tooltip>
                    </Grid>
                    <Grid item xs={3} lg={1} key={14} >
                        <Tooltip title="MS Azure" placement="top-start">
                        <IconButton  sx={{ color: "black", ":hover": {color: "#0093E9"}}}>
                            <SiMicrosoftazure size={60}/>
                        </IconButton>
                        </Tooltip>
                    </Grid>
                    <Grid item xs={3} lg={1} key={15} >
                        <Tooltip title="GCP" placement="top-start">
                        <IconButton  sx={{ color: "black", ":hover": {color: "#0093E9"}}}>
                            <SiGooglecloud size={60}/>
                        </IconButton>
                        </Tooltip>
                    </Grid>
                    <Grid item xs={3} lg={1} key={16} >
                        <Tooltip title="Android" placement="top-start">
                        <IconButton  sx={{ color: "black", ":hover": {color: "#0093E9"}}}>
                            <IoLogoAndroid size={60}/>
                        </IconButton>
                        </Tooltip>
                    </Grid>
                    <Grid item xs={3} lg={1} key={17} >
                        <Tooltip title="IOS" placement="top-start">
                        <IconButton  sx={{ color: "black", ":hover": {color: "#0093E9"}}}>
                            <FaApple size={60}/>
                        </IconButton>
                        </Tooltip>
                    </Grid>
                    <Grid item xs={3} lg={1} key={18} >
                        <Tooltip title="React Native" placement="top-start">
                        <IconButton  sx={{ color: "black", ":hover": {color: "#0093E9"}}}>
                            <TbBrandReactNative size={60}/>
                        </IconButton>
                        </Tooltip>
                    </Grid>
                    <Grid item xs={3} lg={1} key={19} >
                        <Tooltip title="C++" placement="top-start">
                        <IconButton  sx={{ color: "black", ":hover": {color: "#0093E9"}}}>
                            <TbBrandCpp size={60}/>
                        </IconButton>
                        </Tooltip>
                    </Grid>
                    <Grid item xs={3} lg={1} key={20} >
                        <Tooltip title="Github" placement="top-start">
                        <IconButton  sx={{ color: "black", ":hover": {color: "#0093E9"}}}>
                            <FaGithub size={60}/>
                        </IconButton>
                        </Tooltip>
                    </Grid>
                    <Grid item xs={3} lg={1} key={21} >
                        <Tooltip title="Github Actions" placement="top-start">
                        <IconButton  sx={{ color: "black", ":hover": {color: "#0093E9"}}}>
                            <SiGithubactions size={60}/>
                        </IconButton>
                        </Tooltip>
                    </Grid>
                    <Grid item xs={3} lg={1} key={22} >
                        <Tooltip title="Jenkins" placement="top-start">
                        <IconButton  sx={{ color: "black", ":hover": {color: "#0093E9"}}}>
                            <FaJenkins size={60}/>
                        </IconButton>
                        </Tooltip>
                    </Grid>
                    <Grid item xs={3} lg={1} key={23} >
                        <Tooltip title="Ansible" placement="top-start">
                        <IconButton  sx={{ color: "black", ":hover": {color: "#0093E9"}}}>
                            <SiAnsible size={60}/>
                        </IconButton>
                        </Tooltip>
                    </Grid>
                    <Grid item xs={3} lg={1} key={24} >
                        <Tooltip title="Kubernetes" placement="top-start">
                        <IconButton  sx={{ color: "black", ":hover": {color: "#0093E9"}}}>
                            <SiKubernetes size={60}/>
                        </IconButton>
                        </Tooltip>
                    </Grid>
                    <Grid item xs={3} lg={1} key={25} >
                        <Tooltip title="Tensorflow" placement="top-start">
                        <IconButton  sx={{ color: "black", ":hover": {color: "#0093E9"}}}>
                            <SiTensorflow size={60}/>
                        </IconButton>
                        </Tooltip>
                    </Grid>
                    <Grid item xs={3} lg={1} key={26} >
                        <Tooltip title="Scikitlearn" placement="top-start">
                        <IconButton  sx={{ color: "black", ":hover": {color: "#0093E9"}}}>
                            <SiScikitlearn size={60}/>
                        </IconButton>
                        </Tooltip>
                    </Grid>
                    <Grid item xs={3} lg={1} key={27} >
                        <Tooltip title="Pytorch" placement="top-start">
                        <IconButton  sx={{ color: "black", ":hover": {color: "#0093E9"}}}>
                            <SiPytorch size={60}/>
                        </IconButton>
                        </Tooltip>
                    </Grid>
                    <Grid item xs={3} lg={1} key={28} >
                        <Tooltip title="Scipy" placement="top-start">
                        <IconButton  sx={{ color: "black", ":hover": {color: "#0093E9"}}}>
                            <SiScipy size={60}/>
                        </IconButton>
                        </Tooltip>
                    </Grid>
                    <Grid item xs={3} lg={1} key={29} >
                        <Tooltip title="Numpy" placement="top-start">
                        <IconButton  sx={{ color: "black", ":hover": {color: "#0093E9"}}}>
                            <SiNumpy size={60}/>
                        </IconButton>
                        </Tooltip>
                    </Grid>
                    <Grid item xs={3} lg={1} key={30} >
                        <Tooltip title="Pandas" placement="top-start">
                        <IconButton  sx={{ color: "black", ":hover": {color: "#0093E9"}}}>
                            <SiPandas size={60}/>
                        </IconButton>
                        </Tooltip>
                    </Grid>
                    <Grid item xs={3} lg={1} key={31} >
                        <Tooltip title="Raspberry Pi" placement="top-start">
                        <IconButton  sx={{ color: "black", ":hover": {color: "#0093E9"}}}>
                            <FaRaspberryPi size={60}/>
                        </IconButton>
                        </Tooltip>
                    </Grid>
                    <Grid item xs={3} lg={1} key={32} >
                        <Tooltip title="Arduino" placement="top-start">
                        <IconButton  sx={{ color: "black", ":hover": {color: "#0093E9"}}}>
                            <SiArduino size={60}/>
                        </IconButton>
                        </Tooltip>
                    </Grid>
                    <Grid item xs={3} lg={1} key={33} >
                        <Tooltip title="MQTT" placement="top-start">
                        <IconButton  sx={{ color: "black", ":hover": {color: "#0093E9"}}}>
                            <SiMqtt size={60}/>
                        </IconButton>
                        </Tooltip>
                    </Grid>
                    <Grid item xs={3} lg={1} key={34} >
                        <Tooltip title="GraphQL" placement="top-start">
                        <IconButton  sx={{ color: "black", ":hover": {color: "#0093E9"}}}>
                            <GrGraphQl size={60}/>
                        </IconButton>
                        </Tooltip>
                    </Grid>
                    <Grid item xs={3} lg={1} key={35} >
                        <Tooltip title="Redis" placement="top-start">
                        <IconButton  sx={{ color: "black", ":hover": {color: "#0093E9"}}}>
                            <DiRedis size={60}/>
                        </IconButton>
                        </Tooltip>
                    </Grid>
                    <Grid item xs={3} lg={1} key={36} >
                        <Tooltip title="Apache Kafka" placement="top-start">
                        <IconButton  sx={{ color: "black", ":hover": {color: "#0093E9"}}}>
                            <SiApachekafka size={60}/>
                        </IconButton>
                        </Tooltip>
                    </Grid>
                    
                    
                    

                </Grid>
                
            </Container>
            
        </Box>
    );
}

export default Technologies;