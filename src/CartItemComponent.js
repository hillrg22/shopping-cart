import React from "react"

const CartItemComponent = (props) => {
  return props.CartItemsList.map(item => {
    return (
      <div class="list-group-item">
        <div class="row">
          <div class="col-md-8">{item.product.name}</div>
          <div class="col-md-2">{item.product.priceInCents}</div>
          <div class="col-md-2">{item.quantity}</div>
        </div>
      </div>
    )
  })
}





export default CartItemComponent
