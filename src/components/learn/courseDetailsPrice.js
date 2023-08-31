import { Box, Typography, Stack } from '@mui/material';
import Container from "@mui/material/Container";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

const CourseDetailPrice = ({price, join}) => {

    return (
        <>                                     
        <Box sx={{ bgcolor: 'white',  minHeight: '500', alignItems: 'center', justifyContent: 'center', display: 'flex', my: 5}}>
        <Container maxWidth="lg">
            <Stack sx ={{alignItems: 'center', justifyContent: 'center', mb: 2}}>
                <Typography
                            variant="h2"
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
                                mb: 2
                            }}
                        >
                            Pricing
                </Typography>
                <Typography
                            variant="h2"
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
                                color: 'green',
                                textDecoration: 'none',
                                textShadow: 2,
                                mb: 5
                            }}
                        >
                            <CurrencyRupeeIcon/> {price}/- 
                </Typography>
                <Button variant="contained" endIcon={<SendIcon />} href={join}>
                    Join to Learn
                </Button>
                
            </Stack>
            
        </Container>
        </Box>
        </>
    );

}

export default CourseDetailPrice;