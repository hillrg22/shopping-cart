import React from 'react'
import CartItemComponent from './CartItemComponent'



class CartItems extends React.Component {
  render(){
    return(
      <div className = "container">
        <h1>Cart Items</h1>
        <div class="collection-item">
          <div className="list-group">
            <div className="list-group-item">
              <div className="row">
                <div className="col-md-8">Product</div>
                <div className="col-md-2">Price</div>
                <div className="col-md-2">Quantity</div>
              </div>
            </div>
              <CartItemComponent CartItemsList = {this.props.CartItemsList}/>
          </div>
      </div>
    </div>
    )
  }
}



export default CartItems
