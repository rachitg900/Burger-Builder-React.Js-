import React from 'react'
import classes from './Toolbar.css'
import Logo from '../../Logo/Logo'
import NavigationItems from './NavigationItems/NavigationItems'
const Toolbar = (props) => {
    return (
        <header className = {classes.Toolbar}>
            <div className={classes.DrawerToggle} onClick={props.click}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div>
                <Logo height ="100%"/>
            </div>

            <nav className = {classes.desktopOnly}>
                <NavigationItems/>
            </nav>
        </header>
    )
}

export default Toolbar;