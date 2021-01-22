import React from 'react';
import classes from './Header.module.css';
import imageSrc from './pngegg.png'

const Header = () => {
    return <header className={classes.header}>
        <img title="logo" src={imageSrc} alt="logo"/>
    </header>;
}
export default Header;