import React from 'react'
import classes from './Button.css'
const Button = (props) =>{
    const classapply = props.classapply;
    console.log(classes[classapply]);
    return(
        <button
            className={[classes.Button , classes[classapply]].join(' ')}
            onClick={props.clicked}> {props.children} 
        </button>
    )
}

export default Button;