import React from 'react'
import classes from './Toolbar.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import Hamburgermenu from '../SideDrawer/Hamburgermenu/Hamburgermenu'

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <Hamburgermenu menuClicked={props.menuClicked} />
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
)


export default toolbar