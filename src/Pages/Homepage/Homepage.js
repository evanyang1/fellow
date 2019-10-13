import React from 'react'
import {Button} from 'react-bootstrap'

class Homepage extends React.Component {

  render(){
    return (
      <div>
        <h1> Welcome to Fellow! </h1>

        <Button variant="info" size="lg">Log in</Button>
        <Button variant="light" size="lg">Create an Account</Button>
      </div>
    )
  }

}


export default Homepage
