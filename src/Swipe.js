import React from 'react';
import './Swipe.css';
import IconButton from '@material-ui/core/IconButton';
import UndoIcon from '@material-ui/icons/Undo';
import ClearIcon from '@material-ui/icons/Clear';
import StarIcon from '@material-ui/icons/Star';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
function Swipe(props) {
    return (
        <div className="swipe">
            
            <IconButton className="swipebutton">
            <UndoIcon className="swipeRepeat" color="action" fontSize="large"/>
            </IconButton>
            
            <IconButton onClick={props.left} className="swipebutton">
            <ClearIcon className="swipeLeft" color="action" fontSize="large"/>
            </IconButton>
            
            <IconButton className="swipebutton">
            <StarIcon className="swipeStar" color="action" fontSize="large"/>
            </IconButton>
            
            <IconButton onClick={props.right} className="swipebutton">
            <FavoriteIcon className="swipeRight" color="action" fontSize="large"/>
            </IconButton>
            
            <IconButton className="swipebutton">
            <FlashOnIcon className="swipeBoost" color="action" fontSize="large"/>
            </IconButton>
        </div>
    )
}

export default Swipe
