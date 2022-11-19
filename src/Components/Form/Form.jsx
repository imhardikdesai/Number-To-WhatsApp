import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Form.css';
import { useState } from 'react';

export default function Form() {
    const [number, setNumber] = useState(0);
    return (
        <div className="formData">
            <TextField
                style={{ marginBottom: 20 }}
                required
                id="outlined-number"
                label="Phone Number"
                type="tel"
                placeholder="Enter your phone number"
                InputLabelProps={{
                    shrink: true,
                }}
                onChange={(e) => {
                    setNumber(e.target.value);
                }}
            />
            <a className='anchor' href={number ? `http://wa.me/+91${number}` : "/#"} target="_self" rel="noopener noreferrer">
                <Button variant="contained" color="success">Send Message</Button>
            </a>

        </div>
    );
}