import { connect } from 'react-redux'
import React from 'react'

import {updateProfile} from '../actions/pings.js'

class Profile extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: props.currentUser.name,
      photo: props.currentUser.photo_url,
      username: props.currentUser.username
    }
    this.handleChange = this.handleChange.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  updateUser (e) {
    e.preventDefault()
    // console.log('put dispatch here')
    this.props.dispatch(updateProfile(this.props.currentUser.id, this.state))
  }

  render () {
    const {username, photo, name, password} = this.state
    return (
      <div className="update-user-form">
        <div><h1>Profile</h1></div>
        <img src={photo} alt="" width="200px" height="200px"/>
        <form onSubmit={this.submitUpdate}>
          Photo:
          <p><input name="photo" onChange={this.handleChange} placeholder="Update Image" value={photo} /></p>
          Name:
          <p><input name="name" onChange={this.handleChange} placeholder="Your Name" value={name} /></p>
          Username:
          <p><input name="username" onChange={this.handleChange} placeholder="username" value={username} /></p>
          Password:
          <p><input name="password" onChange={this.handleChange} placeholder="password" /></p>
          <p><input type="submit" onClick={this.updateUser} /></p>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(Profile)
