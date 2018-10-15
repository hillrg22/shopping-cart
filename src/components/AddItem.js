import React from 'react'

//should take an array of products & a function that will be called when the form is submitted

class AddItem extends React.Component {
  constructor(props){
    super(props)
  }

  onSubmit = (e) => {
    e.preventDefault()
    if(this.refs.amount.value === "" || "0"){
      alert("Please enter a quantity")
    }
    else{
    var newItem = {
      id: this.props.cartItemsList.length +1,
      product: {
        id: this.refs.itemId.value,
        name: this.props.selected,
        priceInCents: this.refs.price.value
      },
      quantity: this.refs.amount.value
    };
    // console.log(newItem,'submitted', this.refs.amount.value);
      this.props.onAddProduct(newItem)
    }
  }


  render() {
    return(
    <form onSubmit={this.onSubmit}>
      <div className = "form-group">
        <label htmlFor="products">Products</label>
          <select onChange= {this.props.onSelectChange} className="form-control" >
            {this.props.products.map(item => <option>{item.name}</option>)}
          </select>
      </div>
      <div className = "form-group">
        <label htmlFor="Quantity">Quantity</label><br></br>
          <input placeholder= "Enter Quantity" ref="amount" />
        </div>
      <div>
        <button type="Submit" className= "btn btn-primary" >Submit</button>
        <input type="hidden" ref="price" value={this.props.currentAmt} />
        <input type="hidden" ref="itemId" value={this.props.currentId} />
      </div>

    </form>
    )
  }
}



export default AddItem
