import * as React from 'react';
// import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import { useState } from 'react';
import ReactFlagsSelect from 'react-flags-select';

const SendText = () => {
  const [selected, setSelected] = useState('');
  console.log(selected);

  return (
    <>
      <div className="formData">
        <div className="text-center my-4 w-50 m-auto">
          <Typography color={'#23A455'} variant="h6" gutterBottom>
            Send Message with WhatsApp
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Add mobile Number and message for the person you want to send. <br />
            <strong> Ex:- 7359568694</strong> <br />
            <strong> Ex:- Hello, How are you?</strong>
          </Typography>
        </div>


        <ReactFlagsSelect
          selected={selected}
          onSelect={(code) => setSelected(code)}
        />;
      </div>
    </>
  )
}

export default SendText
