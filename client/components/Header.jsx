import React from 'react'
import { connect } from 'react-redux'

const Header = () => {
  return (
    <div className='header'>
      <h1>Pings</h1>
    </div>
  )
}
function mapStateToProps(state) {
  return {
    isHeaderVisable: state.isHeaderVisable
  }
}


export default connect(mapStateToProps)(Header)
