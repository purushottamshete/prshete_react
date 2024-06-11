import React, { useState }  from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import {Alert} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { useForm } from 'react-hook-form';
import emailjs from "emailjs-com";
// Email JS login via gmail id
const EmailContactForm = () => {
    
    const [alert, setAlert] = useState(false);
    const { register, handleSubmit, reset, formState} = useForm()
    const { errors, isSubmitting } = formState;
    const onSubmit = (formData) => {

        emailjs
            .send(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, formData, process.env.REACT_APP_EMAILJS_USER_ID)
            .then(
                (result) => {
                    setAlert({
                        severity: 'success',
                        message: 'The message sent successfully, Thanks for contacting'
                    });
                    reset();
                },
                (error) => {
                    setAlert({
                        severity: 'error',
                        message: 'Error sending message: ' + error.text
                    });
                }
            );
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve();
                }, 5000);
            });
    //
    }

    return (
        
        <Box
            component="form"
            autoComplete="off"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            sx={{mb: 3}}
            >
            {   alert ? 
                <Alert
                    severity={alert.severity}
                    sx={{ mb: 1, mt: 1 }}
                >
                    {alert.message}
                </Alert> :
                <></>
            }
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
                    multiline
                    rows={4}
                    {...register("message", {required: 'This field is required'})}
                    error={!!errors.message}
                    helperText={errors.message?.message}
                    
                />
            </FormControl>
            <FormControl fullWidth sx={{ mb: 1, mt: 1 }}>
                <LoadingButton 
                    variant="contained" 
                    type="submit" 
                    value="Send"
                    loading={isSubmitting}
                >
                Send</LoadingButton>
            </FormControl>
        </Box>
        
    );
};

export default EmailContactForm;