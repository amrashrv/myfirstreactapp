import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';
import imageSrc from './pngegg.png'

const Header = (props) => {
    return (
        <header className={classes.header}>
            <img title="logo" src={imageSrc} alt="logo" />
            <div className={classes.loginBlock}>
                {props.isAuth
                ? <div>{props.login} - <button onClick={props.logout}>Logout</button></div> 
                :<NavLink to={'/login/'}>Login</NavLink> }
                
            </div>
        </header>
    );
}
export default Header;