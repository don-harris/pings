import { connect } from 'react-redux'
import React from 'react'

class Register extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      // bring in photourl into img tag when input photurl typed in
      photo_url: '/images/Blank_Avatar.png'
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(evt) {
    // updating photourl when we type in photo input
    this.setState({
      photo_url: evt.target.value
    })
  }


  render () {
    // onchange for image tag to bring in image once typed in
    // form for photo, name, username, password, password confirm
    // save (/submit) button for form.
    return (
      <div>
        <div><h1>Register here...</h1></div>
        <div><img src={this.state.photo_url} />profile image</div>
        <div>
          <label>username
            <input type='text' />
          </label>
          <label>password
            <input type='text' />
          </label>
          <label>confirm password
            <input type='text' />
          </label>
          <label>name
            <input type='text' />
          </label>
          <label>photo
            <input type='text' onChange={(e) => this.handleChange(e)} placeholder="url..." />
          </label>
          <label>SAVE
            <input type='submit' value='register' onClick={} />
          </label>
        </div>
      </div>
    )
  }
}

export default connect()(Register)
