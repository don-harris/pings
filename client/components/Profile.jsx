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
      <div className="update-user-form has-text-centered">
        <div><h1 className="title is-2">Profile</h1></div>
        <img src={photo} alt="" width="200px" height="200px" className="images"/>
        <form className="form">
          <label>
            Photo:  <p className="profile-photo"><input name="photo" onChange={this.handleChange} placeholder="Update Image" value={photo} /></p> </label><label>
            Name: <p className="profile-name"><input name="name" onChange={this.handleChange} placeholder="Your Name" value={name} /></p></label> <label>
              Username:<p className="profile-username"><input name="username" onChange={this.handleChange} placeholder="username" value={username} /></p></label>  <label>
            Password: <p className="profile-password" ><input name="password" onChange={this.handleChange} placeholder="password" value={password} /></p></label>
          <p className="profile-submit"><input type="submit" onClick={this.updateUser} className="button"/></p>
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
