import React from 'react'
import {connect} from 'react-redux'

import {fetchPings} from '../actions/pings'
import Ping from './Ping'

class Pings extends React.Component {
  componentDidMount () {
    this.props.dispatch(fetchPings())
  }

  render () {
    return (
      <div className='container has-text-centered'>
        {this.props.pings.map((ping) => {
          return <div key={ping.id}> <Ping ping={ping}/> </div>
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    pings: state.pings
  }
}

export default connect(mapStateToProps)(Pings)
