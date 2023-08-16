import { Box, Container, Stack, Typography, CardMedia, Button } from '@mui/material';
import TelegramIcon from '@mui/icons-material/Telegram';

const YouTubeEmbeded = () => (
    <>
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
                                        lg: 40,
                                        xs: 25
                                    },
                                    color: 'inherit',
                                    textDecoration: 'none',
                                    textShadow: 2,
                                    mb: 2
                                }}
                            >
                                Why Learn Python in 2023?
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
                                Learning Python will open up wide range of career prospects for you.
                </Typography>
                
                <CardMedia 
                    sx={{
                        height: {
                            lg: 315,
                            xs: 200
                        },
                        width: {
                            lg: 560,
                            xs: 350
                        },
                        border: 0
                    }}
                    component="iframe" 
                    src="https://www.youtube.com/embed/Lop3KwJ5DZ0"
                    allow="autoPlay"/>

                    <br/>
                    <Button 
                        variant="outlined" 
                        href="https://t.me/+KBxZKPvNjPFkNjg1" 
                        target="_blank"
                        >
                        <TelegramIcon /> Join to Learn
                    </Button>
            </Stack>
        </Container>
    </Box>
    </>
);

export default YouTubeEmbeded;