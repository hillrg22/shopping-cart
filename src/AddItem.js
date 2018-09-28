import React from 'react'

//should take an array of products & a function that will be called when the form is submitted
class AddItem extends React.Component {
  render(){
    return(
    <div>
      <div className = "form-group">
        <label for="Items">Items</label>
          <select className="form-control" >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
      </div>
      <div className = "form-group">
        <label for="Quantity">Quantity</label>
          <input placeholder= "Enter Quantity"/>
        </div>
    </div>
    )
  }
}

export default AddItem
