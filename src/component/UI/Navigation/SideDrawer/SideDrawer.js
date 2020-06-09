import React from 'react'
import classes from './SideDrawer.css'
import Logo from '../../../Logo/Logo'
import BackDrop from '../../Backdrop/Backdrop'
import NavigationItems from '../NavigationItems/NavigationItems'
import Aux from '../../../../hoc/Auxx'

const SideDrawer = (props) => {

    let css;
    if(props.remove)
         css = [classes.SideDrawer , classes.Open];
    else
         css = [classes.SideDrawer , classes.Close];

    return(
        <Aux>
            <BackDrop remove={props.remove} click = {props.clicked}/>
            <div className = {css.join(' ')}>
                <Logo height ="10%"/>
                <nav>
                    <NavigationItems/>
                </nav>
                
            </div>
        </Aux>
        
    )
}

export default SideDrawer;