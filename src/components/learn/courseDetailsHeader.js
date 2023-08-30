import { Box, Typography, Stack } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import LaptopIcon from '@mui/icons-material/Laptop';
import Container from "@mui/material/Container";



const CourseDetailHeader = ({title, description, video, hours}) => {

    return (
        <>
        <Box sx={{ bgcolor: 'white',  minHeight: '500', alignItems: 'center', justifyContent: 'center', display: 'flex', my: 10}}>
            <Container maxWidth="lg">
                <Typography
                                variant="h1"
                                sx={{
                                    fontFamily: 'Poppins,sans-serif',
                                    fontWeight: {
                                        lg: 600,
                                        xs: 600
                                    },
                                    fontSize: {
                                        lg: 30,
                                        xs: 20
                                    },
                                    color: 'inherit',
                                    textDecoration: 'none',
                                    textShadow: 2,
                                    mb: 1
                                }}
                            >
                                {title}
                    </Typography>
                    <Card sx={{ display: 'flex', mb: 2 }}>
                        <CardMedia
                            src={video}
                            sx={{
                                height: {
                                    lg: 300,
                                    xs: 150
                                },
                                width: {
                                    lg: 500,
                                    xs: 250
                                },
                                border: 0
                            }}
                            component="iframe" 
                            alt="Live from space album cover"
                        />
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography
                                            variant="h1"
                                            sx={{
                                                fontFamily: 'Poppins,sans-serif',
                                                fontWeight: {
                                                    lg: 600,
                                                    xs: 600
                                                },
                                                fontSize: {
                                                    lg: 20,
                                                    xs: 10
                                                },
                                                color: 'inherit',
                                                textDecoration: 'none',
                                                textShadow: 2,
                                                mb: 2
                                            }}
                                        >
                                            Course Description:
                                </Typography>
                                <Typography variant="p" color="text.secondary" component="p">
                                {description}
                                </Typography>
                            </CardContent>
                            
                            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                                <Stack direction="row" spacing={1}>
                                    <Chip
                                        label={`${hours} Hours`}
                                        icon={<AccessTimeIcon />}
                                        variant="outlined"
                                        clickable={false}
                                    />
                                    <Chip
                                        label="Beginner Friendly"
                                        icon={<CheckCircleOutlineIcon />}
                                        variant="outlined"
                                        clickable={false}
                                    />
                                    <Chip
                                        label="Handson"
                                        icon={<LaptopIcon />}
                                        variant="outlined"
                                        clickable={false}
                                    />
                                    
                                </Stack>
                            </Box>
                            
                        </Box>   
                    </Card>
            </Container>
        </Box>                                            

        </>
    );

}

export default CourseDetailHeader;