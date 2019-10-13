import React from 'react'
import {Button} from 'react-bootstrap'

import {Link, BrowserRouter, Switch, Route} from 'react-router-dom'

class Homepage extends React.Component {

  render(){
    return (
      <div>
        <h1> Welcome to Fellow! </h1>

        <Link to="/Login"><Button variant="info" size="lg">Log in</Button></Link>
        <Button variant="light" size="lg">Create an Account</Button>
      </div>
    )
  }

}


export default Homepage
