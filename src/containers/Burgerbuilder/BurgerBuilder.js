import React , {Component} from 'react';
import Aux from '../../hoc/Auxx'
import Burger from '../../component/Burger/Burger'
import BuildControls from '../../component/Burger/BuildControls/BuildControls'
import Modal from '../../component/UI/Modal/Modal'
import OrderSummary from '../../component/OrderSummary/OrderSummary'

const INGREDIENT_PRICE = {
    salad:10,
    meat: 39,
    bacon: 10,
    cheese: 10
}
class BurgerBuilder extends Component{

    state = {
        ingredients:{
            salad: 0,
            cheese: 0,
            meat : 0,
            bacon:0
        },
        totalPrice: 69,
        purchasable: false,
        purchasing: false
    }


    updatePurchasable = (ingredients , totalPrice) => {
        const sum = Object.keys(ingredients)
                    .map((igKey) => {
                        return ingredients[igKey]
                    })
                    .reduce((sum , el)=>{
                        return sum + el;
                    } , 0) - totalPrice;
        
        if(sum > 0){
            this.setState({purchasable:true })
        }
        else
        this.setState({purchasable:false })
        
    }

    addIngredient = (type) => {

        let oldingredient = this.state.ingredients[type];
        let newIngredient = oldingredient + 1;
        const oldState = {
            ...this.state.ingredients
        }
        
        const BasePrice = INGREDIENT_PRICE[type];
        let oldPrice = this.state.totalPrice;
        let newPrice = oldPrice + BasePrice
        oldState.totalPrice = newPrice;
        oldState[type] = newIngredient;
        this.setState({ingredients:oldState,totalPrice:oldState.totalPrice});
        this.updatePurchasable(oldState , oldState.totalPrice);   
        
    }

    removeIngredient = (type) => {
        let oldingredient = this.state.ingredients[type];
        let newIngredient = oldingredient - 1;
        const oldState = {
            ...this.state.ingredients
        }
        if(oldingredient <= 0){
            return;
        }
        const BasePrice = INGREDIENT_PRICE[type];
        let oldPrice = this.state.totalPrice;
        let newPrice = oldPrice - BasePrice
        oldState.totalPrice = newPrice;
        oldState[type] = newIngredient;
        this.setState({ingredients:oldState , totalPrice:oldState.totalPrice});
        this.updatePurchasable(oldState , oldState.totalPrice);   
    }

    purchasingclicked = () => {
        this.setState({
            purchasing:true
        })
    }

    removeModalHandler = () => {
        this.setState({
            purchasing:false
        })
    }

    orderProceedhandler = () => {
        alert("Thanks for your Order");
    }

    render(){
        let disableInfo = {...this.state.ingredients};
        for(let key in disableInfo){
            if(disableInfo[key] <= 0)
            {
                disableInfo[key] = true;
            }
            else    
            disableInfo[key] = false;
                
        }
        return(
            <Aux>
                 <Modal purchasing ={this.state.purchasing} removeModal={this.removeModalHandler}>
                    <OrderSummary 
                        proceedClicked = {this.orderProceedhandler}
                        cancelClicked = {this.removeModalHandler}
                        ingredients={this.state.ingredients}/>
                 </Modal>
                 <Burger ingredients = {this.state.ingredients}/>
                 <BuildControls
                  added = {this.addIngredient} 
                  remove ={this.removeIngredient} 
                  disablebutton ={disableInfo} 
                  purchasable = {this.state.purchasable}
                  purchasingclicked = {this.purchasingclicked}
                  price={this.state.totalPrice}/>
            </Aux>
        )
    }
}

export default BurgerBuilder;