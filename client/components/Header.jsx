import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const Header = (props) => {
  return (
    <div className='header'>
      <Link to='/'><h1>Pings</h1></Link>
      {!props.currentUser
        ? <ul>
        <li><Link to='/signin'><strong>Sign In</strong></Link></li>
        <li><Link to='/register'><strong>Register</strong></Link></li>
      </ul>
        : <ul>
        <li><Link to='/new'><strong>Create new ping</strong></Link></li>
        <li><Link to='/profile'><strong>My Profile</strong></Link></li>
      </ul>
      }
    </div>
  )
}

function mapStateToProps (state) {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(Header)
