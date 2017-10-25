import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {kioskOn} from '../actions/kiosk-mode'


const Header = (props) => {
  return (
    <div className='header level'>
      <Link to='/'><h1>Pings</h1></Link>
       <button onClick={() => props.dispatch(kioskOn())}>Kiosk Mode</button>
      {!props.currentUser
        ? <ul>
        <li><Link to='/signin'><strong>Sign In</strong></Link></li>
        <li><Link to='/register'><strong>Register</strong></Link></li>
      </ul>
        : <ul>
      <ul>
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
