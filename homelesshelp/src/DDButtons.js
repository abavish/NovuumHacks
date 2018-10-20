import React from 'react'
import ServicesButtons from './ServicesButtons'
class DDButtons extends React.Component{
  state = {
    donorClicked: false,
    doneeClicked: false
  }

  constructor(props){
    super(props)
    this.handleDonorClick = this.handleDonorClick.bind(this)
    this.handleDoneeClick = this.handleDoneeClick.bind(this)
  }

  handleDonorClick(){
    this.setState({
      donorClicked: true
    })
  }

  handleDoneeClick(){
    console.log("DOnee clicked")
    this.setState({
      doneeClicked: true
    })
  }

  render(){
    if(!this.state.donorClicked && !this.state.doneeClicked){
      return (
        <div className="container-fluid button-container">
          <div className="row">
            <div className="col-md-6 Donor text-center">
              <button type="button" className="btn btn-primary btn-dd" onClick={this.handleDonorClick}>DONOR</button>
            </div>
            <div className="col-md-6 Donee text-center">
              <button type="button" className="btn btn-secondary btn-dd" onClick={this.handleDoneeClick}>DONEE</button>
            </div>
          </div>


        </div>
      )
    }
    else if(this.state.donorClicked){
      return(
        <ServicesButtons clickedBy="donor"/>
      )
    }
    else if(this.state.doneeClicked){
      return(
        <ServicesButtons clickedBy="donee"/>
      )
    }

  }
}

export default DDButtons
