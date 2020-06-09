import React from 'react'
import classes from './Logo.css'
import img from '../../assets/images/Logo.png'
const Logo = (props) => {
    return(
        <div className = {classes.Logo} style = {{height: props.height}} >
            <img src={img} alt="MyBurger"/>
        </div>
        
    )
};

export default Logo;