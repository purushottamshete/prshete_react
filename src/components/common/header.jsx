import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { Button, Avatar } from '@mui/material';
import prs from '../../assets/images/prs.png';
import { Link } from 'react-router-dom';
import SwipeableTemporaryDrawer from './drawer';
import {pages} from '../../constants';

function Header() {
  return (
    <AppBar position="static" color="transparent" sx={{boxShadow: 0}}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Link to="/"> 
            <Avatar alt="Purushottam Shete" src={prs} sx={{width: 40, height: 40, mr: 1,  display: { xs: 'none', md: 'flex' }}}/>
          </Link>
          
          <Link to="/"> 
          <Avatar alt="Purushottam Shete" src={prs} sx={{width: 32, height: 32, mr: 1,  display: { xs: 'flex', md: 'None' }}}/>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none',  justifyContent: 'flex-end' } }}>
            <SwipeableTemporaryDrawer/>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
            { Object.keys(pages).map((page) => (
              <Button
                key={page}
                href={pages[page]}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                {page}
              </Button>
            
            ))}
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;