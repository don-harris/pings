import { connect } from 'react-redux'
import React from 'react'

class Profile extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: props.currentUser.name,
      photo: props.currentUser.photo_url,
      username: props.currentUser.username,
      password: ''
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
    console.log('put dispatch here')
  }
  render () {
    const {username, photo, name, password} = this.state
    return (
      <div className="updateUser-form">
        <div><h1>Here is where you can update your profile</h1></div>
        <img src={photo} alt="" width="100px" height="100px"/>
        <form>
          Photo: <p><input name="photo" onChange={this.handleChange} placeholder="Update Image" value={photo} /></p>
          Name: <p><input name="name" onChange={this.handleChange} placeholder="Your Name" value={name} /></p>
          Username: <p><input name="username" onChange={this.handleChange} placeholder="username" value={username} /></p>
          Password: <p><input name="password" onChange={this.handleChange} placeholder="password" value={password} /></p>
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
