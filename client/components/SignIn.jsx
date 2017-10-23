import React from 'react'
import {Route} from 'react-router-dom'

class SignIn extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }
}

render() {
  return (
  <div className='signIn'>
    <div className='signIn-form'>
    <form>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
        <input type="submit" value="Submit" />
    </form>
    </div>
  </div>

  )
}


export default SignIn
