import React from 'react'
import classes from './Backdrop.css'
const Backdrop = (props) => {

    const Visibility = props.remove ? <div className = {classes.Backdrop} onClick={props.click}> </div> : null
    return(
        Visibility
    )
}
export default Backdrop;