import React from 'react';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import CheckIcon from '@mui/icons-material/Check';
import { outsourcing, augmentation, consultancy } from '../../constants';


const ServiceButton = (props) => {

    function getImage() {
        if (props.image === 'outsourcing'){
            return outsourcing;
        }else if (props.image === 'augmentation'){
            return augmentation;
        } else if (props.image === 'consultancy'){
            return consultancy;
        } 
    }

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={ getImage() }
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    { props.title }
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    { props.text }
                </Typography>
                <List>
                    { props.benifits.map((benifit) => (
                        <ListItem>
                        <ListItemIcon>
                            <CheckIcon 
                            color="green"
                            sx ={{
                                color: '#0093E9'
                            }}
                            />
                        </ListItemIcon>
                        <ListItemText
                            primary={benifit}
                            
                        />
                        </ListItem>
                    ))}  
                </List>

            </CardContent>

        </Card>
    );
}

export default ServiceButton;