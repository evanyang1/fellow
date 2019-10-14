import React from 'react'
import {Button} from 'react-bootstrap'

import {Link} from 'react-router-dom'

class Login extends React.Component {

  render(){
    return (
      <div>
        <Link to="/">Fellow</Link>
        <h1> Login </h1>
        <form>
          Username:
          <input type="text"/>
          Password:
          <input type="password"/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }

}


export default Login
