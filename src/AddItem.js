import React from 'react'

//should take an array of products & a function that will be called when the form is submitted
class AddItem extends React.Component {
  constructor(props){
  super(props);
  }
  render(){
    return(
    <form>
      <div className = "form-group">
        <label htmlFor="Products">Products</label>
          <select className="form-control" >
            {this.props.Products.map(item => {
                <option>{this.props.Products.item}</option>
          })}
          </select>
      </div>
      <div className = "form-group">
        <label htmlFor="Quantity">Quantity</label><br></br>
          <input placeholder= "Enter Quantity"/>
        </div>
      <div>
        <button type="Submit" className= "btn btn-primary">Submit</button>
      </div>
    </form>
    )
  }
}

export default AddItem
