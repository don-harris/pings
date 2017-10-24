import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      <Link to='/'><h1>Pings</h1></Link>
      <ul>
        <li><Link to='/new'><strong>Create new ping</strong></Link></li>

        <li><Link to='/profile'><strong>My Profile</strong></Link></li>

      </ul>
    </div>
  )
}

// function mapStateToProps(state) {
//   return {
//     isHeaderVisable: state.isHeaderVisable
//   }
// }

export default connect()(Header)
