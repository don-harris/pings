import React from 'react'
import {Route} from 'react-router-dom'

class SignIn extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
}

render() {
  return (
  <div className='signin'>
    <div className='signin-form'>
    <form>
      <label>
        username:
        <input onChange={this.handleChange} type="text" name="username" />
      </label>
        <label>
        Password:
        <input onChange={this.handleChange} type="password" name="password" />
      </label>
        <input type="submit" value="Sign in" />
    </form>
    </div>
  </div>
  )
}

export default connect () (SignIn)
