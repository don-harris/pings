import React from 'react'
import {connect} from 'react-redux'

class Register extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      photoUrl: '/images/blank-avatar.png',
      username: '',
      password: '',
      confirmPassword: '',
      name: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  render () {
    return (
      <div>
        <div><h1>Register here...</h1></div>
        <div><img src={this.state.photoUrl} />profile image</div>
        <div>
          <label>username
            <input type='text' onChange={this.handleChange} />
          </label>
          <label>password
            <input type='text' onChange={this.handleChange} />
          </label>
          <label>confirm password
            <input type='text' onChange={this.handleChange} />
          </label>
          <label>name
            <input type='text' onChange={this.handleChange} />
          </label>
          <label>photo
            <input type='text' onChange={this.handleChange} placeholder="url..." />
          </label>
          <label>SAVE
            <input type='submit' value='register'/>
          </label>
        </div>
      </div>
    )
  }
}

export default connect()(Register)
