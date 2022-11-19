import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Form.css';

export default function Form() {
    return (
        // <Box
        //     sx={{
        //         width: 500,
        //         maxWidth: '100%',
        //     }}
        // >
            <div className="formData">
                <TextField
                    style={{ marginBottom: 20 }}
                    required
                    id="outlined-number"
                    label="Phone Number"
                    type="tel"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <Button variant="contained">Send Message</Button>
            </div>
        // </Box>
    );
}