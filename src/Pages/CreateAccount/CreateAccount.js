import React from 'react'
import {Button} from 'react-bootstrap'

import {Link} from 'react-router-dom'

class CreateAccount extends React.Component {

  render(){
    return (
      <div>
        <Link to="/">Fellow</Link>
        <h1> Create an Account </h1>
        <form>
          Username:
          <input type="text"/>
          Password:
          <input type="password"/>
          <input type="submit" value="Create Account" />
        </form>
      </div>
    )
  }

}


export default CreateAccount
