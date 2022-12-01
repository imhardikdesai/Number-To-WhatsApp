import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MessageIcon from '@mui/icons-material/Message';
import DialpadIcon from '@mui/icons-material/Dialpad';
import { Link } from 'react-router-dom'
export default function Footer() {
    const [value, setValue] = React.useState('/');


    const handleChange = (event, newValue) => {
        setValue(newValue);
        console.log(newValue);
    };

    return (
        <Link to={value}>
            <BottomNavigation style={{ justifyContent: "space-around", position: "fixed", bottom: 0, marginBottom: "0.5rem", }} sx={{ width: '100%' }} value={value} onChange={handleChange}>

                <BottomNavigationAction
                    label="Dialpad"
                    value="/"
                    showlabels='false'
                    icon={<DialpadIcon />}
                />

                <BottomNavigationAction
                    label="Send Message"
                    value="/sendtext"
                    showlabels='false'
                    icon={<MessageIcon />}
                />
                <BottomNavigationAction
                    label="Owner"
                    value="/about"
                    showlabels='false'
                    icon={<AccountCircleIcon />} />
            </BottomNavigation>
        </Link>

    );
}