import React from 'react';
import { Box, Typography, Stack, Button } from '@mui/material';
import StorageIcon from '@mui/icons-material/Storage';
import DevicesIcon from '@mui/icons-material/Devices';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import PsychologyIcon from '@mui/icons-material/Psychology';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import WebIcon from '@mui/icons-material/Web';
import MemoryIcon from '@mui/icons-material/Memory';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';

const SpecialityButton = (props) => {

    function getIcon(){
        if (props.icon === 'web'){
            return (
                <WebIcon 
                    sx={{
                        fontSize: {
                            lg: 50,
                            xs: 50
                        },
                        color: '#0093E9',
                        ":hover": {
                            color: "inherit",
                        },
                        mb:2
                    }}
                />
            );
        }else if (props.icon === 'devops'){
            return (
                <AllInclusiveIcon 
                    sx={{
                        fontSize: {
                            lg: 50,
                            xs: 50
                        },
                        color: '#0093E9',
                        ":hover": {
                            color: "inherit",
                        },
                        mb:2
                    }}
                />
            );
        } else if (props.icon === 'server'){
            return (
                <StorageIcon 
                    sx={{
                        fontSize: {
                            lg: 50,
                            xs: 50
                        },
                        color: '#0093E9',
                        ":hover": {
                            color: "inherit",
                        },
                        mb:2
                    }}
                />
            );
        } else if (props.icon === 'mobile'){
            return (
                <PhoneIphoneIcon 
                    sx={{
                        fontSize: {
                            lg: 50,
                            xs: 50
                        },
                        color: '#0093E9',
                        ":hover": {
                            color: "inherit",
                        },
                        mb:2
                    }}
                />
            );
        } else if (props.icon === 'robot'){
            return (
                <PrecisionManufacturingIcon 
                    sx={{
                        fontSize: {
                            lg: 50,
                            xs: 50
                        },
                        color: '#0093E9',
                        ":hover": {
                            color: "inherit",
                        },
                        mb:2
                    }}
                />
            );
        } else if (props.icon === 'business'){
            return (
                <BusinessCenterIcon 
                    sx={{
                        fontSize: {
                            lg: 50,
                            xs: 50
                        },
                        color: '#0093E9',
                        ":hover": {
                            color: "inherit",
                        },
                        mb:2
                    }}
                />
            );
        } else if (props.icon === 'ai'){
            return (
                <PsychologyIcon 
                    sx={{
                        fontSize: {
                            lg: 50,
                            xs: 50
                        },
                        color: '#0093E9',
                        ":hover": {
                            color: "inherit",
                        },
                        mb:2
                    }}
                />
            );
        } else if (props.icon === 'iot'){
            return (
                <MemoryIcon 
                    sx={{
                        fontSize: {
                            lg: 50,
                            xs: 50
                        },
                        color: '#0093E9',
                        ":hover": {
                            color: "inherit",
                        },
                        mb:2
                    }}
                />
            );
        }
    }
    return (
        <Button variant="text" 
            sx={{
                width: {
                    lg: '95%'
                }, 
                color: 'gray', 
                boxShadow: 1, 
                bgcolor: '#f6f6f6',
                py: 4, 
                px: 4,
                borderColor: 'gray',
                ":hover": {
                    bgcolor: '#80D0C7',
                    color: "white",
                    borderColor: 'red',
                    zIndex: 4,
                },
                mb: 3
                }} 
            onClick={props.onClick}
        >
            <Box>
                <Stack sx ={{alignItems: 'left', justifyContent: 'left'}}>
                    {  getIcon() }
                    <Typography
                                variant="h3"
                                sx={{
                                fontFamily: 'Poppins,sans-serif',
                                fontWeight: 500,
                                fontSize: {
                                    lg: 19,
                                    xs: 19
                                },
                                color: 'gray.900',
                                textShadow: 2,
                                textAlign: 'left',
                                mb: 2
                                }}
                            >
                                {props.title}
                    </Typography>
                    <Typography
                                variant="p"
                                sx={{
                                fontFamily: 'Poppins,sans-serif',
                                fontWeight: 300,
                                fontSize: {
                                    lg: 15,
                                    xs: 15
                                },
                                color: 'gray.900',
                                textAlign: 'left',
                                mb: 2,
                                }}
                            >
                                {props.body}
                    </Typography>
                </Stack>
            </Box>
        </Button>
    );
}

export default SpecialityButton;