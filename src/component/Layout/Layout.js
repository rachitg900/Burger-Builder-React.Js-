import React, { Component } from 'react';
import Aux from '../../hoc/Auxx'
import classes from './Layout.css'
import Toolbar from '../UI/Navigation/Toolbar'
import SideDrawer from '../../component/UI/Navigation/SideDrawer/SideDrawer'

class Layout extends Component {

    state = {
        showToggle: false
    }

    removeToggleHandler = () => {
        this.setState({showToggle:false});
    }

    toogleButtonClicked = () => {
        this.setState({showToggle:true});
    }

    render(){
        return(
            <Aux>
            <SideDrawer remove ={this.state.showToggle} clicked = {this.removeToggleHandler}/>
            <Toolbar click = {this.toogleButtonClicked}/>
            <main className={classes.content}>
                {this.props.children}
            </main>
        </Aux>
        )
    }
}

export default Layout;
