import React from 'react'
import { connect } from 'react-redux'

const Pings = () => {
  return (
    <div className='pings'>
      {pings.map((ping, i) => {
        return <div key={i}> <Ping /></div>
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

// need to map over the single pings then render each ping
// <Ping /> has to go within a map and have to pass state to <Ping />
