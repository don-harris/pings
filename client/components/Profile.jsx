import { connect } from 'react-redux'
import React from 'react'

class Profile extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }
  render () {
    return (
      <div><h1>New Profile will go here</h1></div>
    )
  }
}

export default connect()(Profile)