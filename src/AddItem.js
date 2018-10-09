import React from 'react'

//should take an array of products & a function that will be called when the form is submitted
const AddItem = (props) => {
  const dropDownItems = props.Products.map(item=> {
    return (
      <option>{item.id} {item.name} {item.priceInCents}</option>
    )
  })
  const CreateItem = (props) => {

  //     var newItem = {
  //         product:{
  //           id: {},
  //           name: {},
  //           priceInCents: {}
  //         },
  //         quantity: this.props.input.value,
  //     }
  //     this.props.formSubmitted(newItem)
  //     console.log(newItem.quantity)
  }

    return(
    <form>
      <div className = "form-group">
        <label htmlFor="Products">Products</label>
          <select className="form-control" >
            {dropDownItems}
          </select>
      </div>
      <div className = "form-group">
        <label htmlFor="Quantity">Quantity</label><br></br>
          <input placeholder= "Enter Quantity"/>
        </div>
      <div>
        <button type="Submit" className= "btn btn-primary" onClick= {CreateItem} >Submit</button>
      </div>
    </form>
    )
  }


export default AddItem
