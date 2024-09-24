import React, { useState } from 'react';
import { Drawer, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setIsOpen(open);
    };

    const list = () => (
        <div
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
            style={{ width: 250 }}
        >
            <ul className='mobile-nav'>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#reservations">Reservations</a></li>
                <li><a href="#order">Order online</a></li>
                <li className='login_btn'><a href="#login">Login</a></li>
            </ul>
        </div>
    );

    return (
        <nav>
            <IconButton
                onClick={toggleDrawer(true)}
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ display: { xs: 'block', md: 'none' } }} // Show on mobile only
            >
                <MenuIcon />
            </IconButton>
            <Drawer
                anchor="left"
                open={isOpen}
                onClose={toggleDrawer(false)}
            >
                {list()}
            </Drawer>
            <ul className="desktop-nav">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#reservations">Reservations</a></li>
                <li><a href="#order">Order online</a></li>
                <li><a className='login_btn' href="#login">Login</a></li>
            </ul>
        </nav>
    );
}

export default Nav;
