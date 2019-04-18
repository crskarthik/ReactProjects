import React from 'react'
import classes from './Hamburgermenu.css'
const hamburgerMenu = (props) => (
    <div onClick={props.menuClicked} className={classes.Hamburgermenu}>
        <div></div>
        <div></div>
        <div></div>
    </div>
)

export default hamburgerMenu