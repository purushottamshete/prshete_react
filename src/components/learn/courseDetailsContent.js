import { Box, Typography, Stack } from '@mui/material';
import Container from "@mui/material/Container";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const CourseDetailContent = ({content}) => {

    return (
        <>                                     

        <Box sx={{ bgcolor: 'white',  minHeight: '500', my: 5}}>
        <Container maxWidth="lg">
            <Stack sx ={{alignItems: 'center', mb: 2}}>
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
                            Course Content
                </Typography>
                <TableContainer component={Paper} sx={{ width: {
                    lg: 500
                    }, justifyContent: 'center' }}>
                    <Table  aria-label="simple table">
                    
                        <TableBody>
                            {content.map((row, i) => (
                                <TableRow key={i}>
                                    <TableCell component="td" scope="row">
                                        {row}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Stack>
            
        </Container>
        </Box>
        </>
    );

}

export default CourseDetailContent;