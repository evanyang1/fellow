import React from 'react'

class Homepage extends React.Component {
  constructor(props){
    super(props)
    this.popAlert = this.popAlert.bind(this)
  }

  popAlert() {
    alert("Hi");
  }

  render() {
    return (
      <button onClick={this.popAlert}> {this.props.name} </button>
    )
  }

}


export default Homepage
