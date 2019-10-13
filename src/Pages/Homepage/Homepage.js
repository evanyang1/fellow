import React from 'react'
import {Button} from 'react-bootstrap'

class Homepage extends React.Component {

  render(){
    return (
      <div>
        <h1> Welcome to Fellow! </h1>

        <Button variant="success" size="lg">Log in</Button>
      </div>
    )
  }

}


export default Homepage
