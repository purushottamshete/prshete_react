import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { GitHub, Twitter } from "@mui/icons-material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Box } from "@mui/material";
import {pages} from '../../constants';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        py: 4,
        px: 1
      }}
    >
      <Container maxWidth="lg" >
        <Grid container spacing={5}>
          <Grid item container xs={12} sm={4} direction="column">
            { Object.keys(pages).map((page) => (
                
                <Link href={pages[page]} color="inherit" underline="none" variant="h6" key={page}>
                  {page}
                </Link>
              
              ))}
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Offices
            </Typography>
            <Typography variant="body2" color="text.secondary">
            
              <Link href={"https://maps.app.goo.gl/norfARchbMpCDvx69"} color="inherit" underline="none">
              <b>(INDIA)</b> 113, Sai Vision, Pimple Saudagar, Pune, MH 
              </Link>
              <br />
              <b>(EUROPE)</b> Hoofdweg, 1058AW, Amsterdam, Noord Holland, The Netherlands. <br />

            </Typography>


          </Grid>
          <Grid item xs={12} sm={4} >
            <Typography variant="h6" color="text.primary" gutterBottom >
              Follow Us
            </Typography>
            <Link 
              href="https://twitter.com/purushottamshet" 
              color="inherit"
              rel="noopener"
              target="_blank"
              >
              <Twitter />
            </Link>
            <Link 
              href="https://www.linkedin.com/company/prstech/" 
              color="inherit"
              sx={{pl: 1 }}
              rel="noopener"
              target="_blank"
              >
              <LinkedInIcon />
            </Link>
           
            <Link 
              href="https://wa.me/+919619911039" 
              color="inherit"
              sx={{pl: 1 }}
              rel="noopener"
              target="_blank"
              >
              <WhatsAppIcon />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            {new Date().getFullYear()}
            {" "}{"© "}
            <Link color="inherit" href="https://prstech.io/">
              PRSHETE TECHNOLOGIES PVT. LTD.
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}