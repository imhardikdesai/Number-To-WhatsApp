import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Footer() {
    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
        console.log(newValue);
    };

    return (

        <BottomNavigation style={{ justifyContent: "space-around", position: "fixed", bottom: 0, marginBottom: "0.5rem", backgroundColor: "#222E35", }} sx={{
            width: '100%', "& .MuiBottomNavigationAction-root, .Mui-selected, svg": {
                color: "#00A884"
            }
        }} value={value} onChange={handleChange}>

            <BottomNavigationAction
                label="Recents"
                value="recents"
                icon={<RestoreIcon />}
            />
            <BottomNavigationAction
                label="Favorites"
                value="favorites"
                icon={<FavoriteIcon />}
            />
            <BottomNavigationAction
                label="Nearby"
                value="nearby"
                icon={<LocationOnIcon />}
            />
            <BottomNavigationAction
                label="Folder"
                value="folder"
                icon={<FolderIcon />} />

        </BottomNavigation>
    );
}