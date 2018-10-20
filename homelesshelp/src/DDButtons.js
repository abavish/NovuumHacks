import React from 'react'

class DDButtons extends React.Component{
  render(){
    return (
      <div className="container-fluid button-container">
        <div className="row">
          <div className="col-md-6 Donor text-center">
            <button type="button" className="btn btn-primary btn-dd">DONOR</button>
          </div>
          <div className="col-md-6 Donee text-center">
            <button type="button" className="btn btn-secondary btn-dd">DONEE</button>
          </div>
        </div>


      </div>
    )
  }
}

export default DDButtons
