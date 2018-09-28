import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CartHeader from './CartHeader.js'
import CartFooter from './CartFooter.js'
import CartItems from './CartItems.js'
import CartItemComponent from './CartItemComponent.js'

const copyright = "2018"



class App extends Component {
  constructor(props){
  super(props);
    this.state={CartItemsList: [{ id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
      { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
      { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },]}
  }
  render() {
    return (
      <div className="App">
        <header>
          <CartHeader />
        </header>
        <div>
          <CartItems CartItemsList = {this.state.CartItemsList} />

        </div>
        <footer>
          <CartFooter copyright={copyright}/>
        </footer>
      </div>
    );
  }
}

export default App;
