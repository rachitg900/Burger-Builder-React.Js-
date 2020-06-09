import React from 'react';
import classes from './BuildControl.css'

const BuildControl = (props) => {
    return(
        <div className = {classes.BuildControl}>
            <div className = {classes.lable}> {props.lable} </div>
            <button className = {classes.Less } onClick = {props.remove} disabled ={props.disablebutton}> Less </button>
            <button className = {classes.More} onClick = {props.added}>More </button>
        </div>
    )
};

export default BuildControl;