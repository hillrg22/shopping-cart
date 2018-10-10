import React from 'react'

//should take an array of products & a function that will be called when the form is submitted

class AddItem extends React.Component {
  constructor(props){
    super(props)
  }

  onSubmit = (e) => {
      e.preventDefault()
      console.log('submitted')
  }

  render() {
    return(
    <form onSubmit={this.onSubmit}>
      <div className = "form-group">
        <label htmlFor="Products">Products</label>
          <select className="form-control" >
            {this.props.Products.map(item => <option>{item.id} {item.name} {item.priceInCents}</option>)}
          </select>
      </div>
      <div className = "form-group">
        <label htmlFor="Quantity">Quantity</label><br></br>
          <input placeholder= "Enter Quantity"/>
        </div>
      <div>
        <button type="Submit" className= "btn btn-primary" >Submit</button>
      </div>
    </form>
    )
  }
}


export default AddItem
