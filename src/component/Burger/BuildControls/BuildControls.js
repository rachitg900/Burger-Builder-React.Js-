import React from 'react';
import classses from './BuildControls.css';
import Buildcontrol from './Buildcontrol'

const controls = [
    {label: 'Salad' , type : 'salad'},
    {label: 'Bacon' , type : 'bacon'},
    {label: 'Meat' , type : 'meat'},
    {label: 'Cheese' , type : 'cheese'},
    
]

const BuildControls = (props) => {
    return(
        <div className={classses.BuildControls}> 
            <p><strong>Current Price: {props.price}.00/-Rs </strong></p>

            {controls.map((el) => {
                return <Buildcontrol key={el.label} label={el.type} 
                added={() => props.added(el.type)}
                remove = {() => props.remove(el.type)}
                disablebutton = {props.disablebutton[el.type]}/>
            })}
            <button className={classses.OrderButton} disabled={!props.purchasable} onClick={props.purchasingclicked}>Order Now</button>
        </div>
    )
}

export default BuildControls;