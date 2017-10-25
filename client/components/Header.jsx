import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {kioskOn} from '../actions/kiosk-mode'


const Header = (props) => {
  return (
    <div className='header level'>
      <Link to='/'><h1>Pings</h1></Link>
      <button onClick={() => props.dispatch(kioskOn())}>Kiosk Mode</button>
      <ul>
        <li><Link to='/new'><strong>Create new ping</strong></Link></li>
        <li><Link to='/profile'><strong>My Profile</strong></Link></li>
      </ul>
    </div>
  )
}

export default connect()(Header)
