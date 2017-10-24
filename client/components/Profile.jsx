import { connect } from 'react-redux'
import React from 'react'

class Profile extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      updateUser: {
        photo: '',
        username: '',
        password: ''
      }
    }
    this.handleChange = this.handleChange.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  handleChange (e) {
    const updateUser = this.state.updateUser
    updateUser[e.target.name] = e.target.value
    this.setState({
      updateUser: updateUser
    })
  }

  updateUser (e) {
    e.preventDefault()
    console.log('put dispatch here')
  }
  render () {
    const {username, photo, password} = this.state
    return (
      <div className="updateUser-form">
        <div><h1>Here is where you can update your profile</h1></div>
        <img src={photo} alt="" width="100px" height="100px"/>
        <form>
          Photo: <p><input name="name" onChange={this.handleChange}placeholder="Update Image" value={photo} /></p>
          Username: <p><input name="username" onChange={this.handleChange}placeholder="username" value={username} /></p>
          Password: <p><input name="password" onChange={this.handleChange}placeholder="password" value={password} /></p>
          <p><input type="submit" onClick={this.updateUser} /></p>
        </form>
      </div>
    )
  }
}

export default connect()(Profile)
