import React, { useRef } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';

const EmailContactForm = () => {
    const form = useRef();
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [message, setMessage] = React.useState('');


    const sendEmail = () => {
        alert('Sending email');
    }

    return (
        
        <Box
            component="form"
            noValidate
            autoComplete="off"
            ref={form}
            onSubmit={sendEmail}
            sx={{mb: 3}}
            >
            <FormControl fullWidth sx={{ m: 1 }}>
                <TextField
                    id="outlined-name"
                    label="Name"
                    required
                    value={name}
                    onChange={(event) => {
                        setName(event.target.value);
                    }}
                />
            </FormControl>
            <FormControl fullWidth sx={{ m: 1 }}>
                <TextField
                    id="outlined-email"
                    label="Email"
                    required
                    value={email}
                    onChange={(event) => {
                        setEmail(event.target.value);
                    }}
                />
            </FormControl>
            <FormControl fullWidth sx={{ m: 1 }}>
                <TextField
                    id="outlined-message"
                    label="Message"
                    value={message}
                    required
                    multiline
                    rows={4}
                    onChange={(event) => {
                        setMessage(event.target.value);
                    }}
                />
            </FormControl>
            <FormControl fullWidth sx={{ m: 1 }}>
                <Button variant="contained" type="submit" value="Send">Send</Button>
            </FormControl>
        </Box>
        
    );
};

export default EmailContactForm;