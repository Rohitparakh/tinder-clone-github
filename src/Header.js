import React from 'react';
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import ChatIcon from '@material-ui/icons/Chat';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <IconButton >
            <PersonIcon color="action" fontSize="large"/>
            </IconButton>

            <IconButton >
                <NavLink to="/liked">
            <FavoriteIcon color="action" fontSize="large"/>
            </NavLink>
            </IconButton>
            
            <NavLink to="/tinder-clone">
<img src="./img/logo.png" className="logo" alt=""/>
</NavLink>

            <IconButton >
            <ChatIcon color="action"  fontSize="large"/>
            </IconButton>
        </div>
    )
}

export default Header
