import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import {pages} from '../../constants';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState(false);

  const toggleDrawer = (value) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState(value);
  };

 
  return (
    <div>
      
        <React.Fragment>
          
            <IconButton onClick={toggleDrawer(true)}>
                <MenuIcon />
            </IconButton>
          
            <SwipeableDrawer
                open={state}
                anchor='right'
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
            >
                <Box
                    sx={{ width: 'auto' }}
                    role="presentation"
                    onClick={toggleDrawer(true)}
                    onKeyDown={toggleDrawer(false)}
                >
                    <List>
                        {
                        Object.keys(pages).map((page) => (
                        <ListItem key={page} disablePadding>
                            <ListItemButton to={pages[page]}>
                            <ListItemIcon>
                                <ArrowCircleRightIcon sx={{ color: "#0093E9" }}/> 
                            </ListItemIcon>
                            <ListItemText primary={page.toUpperCase()} />
                            </ListItemButton>
                        </ListItem>
                        ))}
                    </List>
                    
                </Box>
            </SwipeableDrawer>
        </React.Fragment>
    </div>
  );
}