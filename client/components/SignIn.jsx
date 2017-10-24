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
  handleChange(e) {
    this.setState({
      username: e.target.value,
      password: e.target.value
    })
  }
}

// signedIn (e) {
//   e.preventDefault()
//   this.userIn(this.state.username),
//   this.pass(this.state.password)
// }

render() {
  return (
  <div className='signIn'>
    <div className='signIn-form'>
    <form>
      <label>
        username:
        <input type="text" name="username" />
      </label>
        <label>signedIn
        Password:
        <input type="password" name="password" />
      </label>
        <input onChange={this.handleChange(e)} type="submit" value="Submit" />
    </form>
    </div>
  </div>
  )
}


export default connect () (SignIn)
