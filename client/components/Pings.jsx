import React from 'react'
import {connect} from 'react-redux'
import {fetchPings} from '../actions/pings'
import Ping from './Ping'

const Pings = (props) => {
  return (
    <div className='pings'>
      <button onClick={() => props.dispatch(fetchPings())}>MEME</button>
      {props.pings.map((ping, id) => {
        return <div key={id}> <Ping ping={ping}/> </div>
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
