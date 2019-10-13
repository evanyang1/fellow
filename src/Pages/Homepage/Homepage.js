import React from 'react'
import {Button} from 'react-bootstrap'

import {Link} from 'react-router-dom'

class Homepage extends React.Component {

  render(){
    return (
      <div>
        <h1> Welcome to Fellow! </h1>

        <Link to="/login"><Button variant="info" size="lg">Log in</Button></Link>
        <Link to="/createaccount"><Button variant="light" size="lg">Create an Account</Button></Link>
      </div>
    )
  }

}


export default Homepage
