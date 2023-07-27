import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import { useForm } from 'react-hook-form';

const EmailContactForm = () => {
    

    const {register, handleSubmit, formState: { errors }} = useForm()
    const onSubmit = (data) => {
        console.log(data);
    }
    
    return (
        
        <Box
            component="form"
            autoComplete="off"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            sx={{mb: 3}}
            >
            <FormControl fullWidth sx={{ mb: 1, mt: 1 }}>
                <TextField
                    id="outlined-name"
                    label="Name"
                    required
                    {...register("name", {required: 'This field is required'})}
                    error={!!errors.name}
                    helperText={errors.name?.message}
                />
            </FormControl>
            <FormControl fullWidth sx={{ mb: 1, mt: 1 }}>
                <TextField
                    id="outlined-email"
                    label="Email"
                    required
                    {...register("email", {required: 'This field is required', pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }})}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                />
            </FormControl>
            <FormControl fullWidth sx={{ mb: 1, mt: 1 }}>
                <TextField
                    id="outlined-message"
                    label="Message"
                    required
                    {...register("message", {required: 'This field is required'})}
                    error={!!errors.message}
                    helperText={errors.message?.message}
                />
            </FormControl>
            <FormControl fullWidth sx={{ mb: 1, mt: 1 }}>
                <Button variant="contained" type="submit" value="Send">Send</Button>
            </FormControl>
        </Box>
        
    );
};

export default EmailContactForm;