import React from 'react';
import Aux from '../../hoc/Auxx'
import Button from '../UI/Button/Button'
const OrderSummary = (props) => {
    const Summary = Object.keys(props.ingredients).map((igkey) => {
                    return <li style = {{textTransform:"capitalize"}} key={igkey}><span>{igkey} :</span>
                     {props.ingredients[igkey]}</li>
                    });
    console.log(Summary);

    return (
        <Aux>
            <h1>Your Order</h1>
            <p>A Delecious Burger with the following ingredients</p>
            <ul>
                {Summary}
            </ul>
            <Button classapply = "Success" clicked = {props.proceedClicked}>CONTINUE</Button>
            <Button classapply = "Cancel" clicked = {props.cancelClicked}>CANCEL</Button>
        </Aux>
    )
};

export default OrderSummary;