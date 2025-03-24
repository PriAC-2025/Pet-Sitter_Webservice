
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar = () => (
    <AppBar position="static">
        <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
                Pet Sitter
            </Typography>
            <Button color="inherit">Home</Button>
            <Button color="inherit">Login</Button>
        </Toolbar>
    </AppBar>
);

export default Navbar;
