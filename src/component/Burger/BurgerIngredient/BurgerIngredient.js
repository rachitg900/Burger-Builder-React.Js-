import React, { Component } from 'react';
import classes from './BurgerIngreient.css'
import Proptypes from 'prop-types';

class BurgerIngreient extends Component{
    render(){
        let Ingredient = null;

        switch(this.props.type){

            case('bread-bottom'):
                Ingredient = <div className={classes.BreadBottom}></div>;
                break;

            case('bread-top'):
                Ingredient = (
                    <div className={classes.BreadTop}>
                        <div className = {classes.Seeds1}></div>
                        <div className = {classes.seeds2}></div>
                    </div>

                )
                break;

            case('meat'):
                Ingredient = <div className={classes.Meat}></div>
                break;

            case('cheese'):
                Ingredient = <div className={classes.Cheese}></div>
                break;

            case('bacon'):
                Ingredient = <div className={classes.Bacon}></div>
                break;

            case('salad'):
                Ingredient = <div className={classes.Salad}></div>
                break;
            
            default:
                Ingredient = null;
        }
       return Ingredient;
    }
}

BurgerIngreient.propTypes = {
    type: Proptypes.string.isRequired
}
export default BurgerIngreient;