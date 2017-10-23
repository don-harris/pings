import React from 'react'
import { connect } from 'react-redux'

const Header = () => {
  return (
    <div className='header'>
      <h1>Pings</h1>
    </div>
  )
}


export default connect()(Header)
