import React from 'react'

class ServicesButtons extends React.Component{
  render(){
    return (
      <div className="container-fluid button-container">
        <div className="row">
            <div className="col-md-12 Donor text-center">
              <button type="button" className="btn btn-danger btn-dd">Food</button>
            </div>
        </div>
        <p></p>
        <div className="row">
          <div className="col-md-12 Donee text-center">
            <button type="button" className="btn btn-info btn-dd">Clothing</button>
          </div>
        </div>


      </div>
    )
  }
}

export default ServicesButtons
