import React from 'react'
import classes from './Burger.css';
import BurgerIngreient from './BurgerIngredient/BurgerIngredient'


const Burger = (props)=> {

    // const transformedIngredients = Object.keys(props.ingredients)
    // .map( igkey => {
    //     return [...Array(props.ingredients[igkey])].map((_, i) => {
    //         <BurgerIngreient key = {igkey + i} type = {igkey} />
    //     });
    // });

    let transformedIngredients = Object.keys(props.ingredients).map( igkey => {
        return [...Array(props.ingredients[igkey])].map( (_ , i) => {
           return <BurgerIngreient key={igkey + i} type = {igkey}/>
        });
    }).reduce((acc , el) => {
        return acc.concat(el);
    } );

    if (transformedIngredients.length === 0){
        transformedIngredients = <p>Please add ingredients</p>
    }


    return (
        <div className={classes.Burger}>
            <BurgerIngreient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngreient type="bread-bottom"/>
        </div>
    )
}

export default Burger;