import React from 'react'
import classes from './Modal.css'
import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../../hoc/Auxx'

const Modal = (props) => {
    return(
        <Aux>
            <div className = {classes.Modal}
                style = {{
                    transform: props.purchasing ? "translateY(0)" : "translateY(-100vh)"
                }}>
                    {props.children}
            </div>  

            <Backdrop
            remove = {props.purchasing} 
            click= {props.removeModal}/>
        </Aux>
    )
};

export default Modal;