import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Instagram, Twitter } from "@mui/icons-material";
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
        p: 6,
      }}
    >
      <Container maxWidth="lg">
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
              Contact Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              113, Sai Vision, Pimple Saudagar, Pune, India
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: contact@prshete.com
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Phone: +91 96199 11039
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} justifyContent='flex-end' >
            <Typography variant="h6" color="text.primary" gutterBottom>
              Follow Us
            </Typography>
            <Link 
              href="https://www.linkedin.com/in/prshete" 
              color="inherit"
              rel="noopener"
              target="_blank"
              >
              <LinkedInIcon />
            </Link>
            <Link
              href="https://www.instagram.com/purushottam.shete"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
              rel="noopener"
              target="_blank"
            >
              <Instagram />
            </Link>
            <Link 
              href="https://twitter.com/purushottamshet" 
              color="inherit"
              sx={{ pr: 1 }}
              rel="noopener"
              target="_blank"
              >
              <Twitter />
            </Link>
            <Link 
              href="https://wa.me/+919619911039" 
              color="inherit"
              rel="noopener"
              target="_blank"
              >
              <WhatsAppIcon />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://prshete.com/">
              prshete.com
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}