import React from 'react'
import { connect } from 'react-redux'

import Ping from './Ping'

const Pings = (props) => {
  return (
    <div className='pings'>
      {props.pings.map((ping, i) => {
        return <div key={i}> <Ping ping={ping}/> </div>
      })}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    pings: state.pings
  }
}

export default connect(mapStateToProps)(Pings)
