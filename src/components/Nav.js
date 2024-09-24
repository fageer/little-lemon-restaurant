import React, { useState } from 'react';
import { Drawer, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

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
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/reservations">Reservations</Link></li>
                <li><Link to="/order">Order online</Link></li>
                <li className='login_btn'><Link to="/login">Login</Link></li>
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
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/reservations">Reservations</Link></li>
                <li><Link to="/order">Order online</Link></li>
                <li><Link className='login_btn' to="/login">Login</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;
