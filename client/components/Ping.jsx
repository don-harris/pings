import React from 'react'
import {connect} from 'react-redux'

const Ping = (props) => {
  return (
    <div className='level'>
      <div>
        <img src={props.ping.senderPhoto} className='images' />
      </div>
      <div>
        <img src={props.ping.image} className='images' />
      </div>
      <div>
        <img src={props.ping.recipientPhoto} className='images' />
      </div>
    </div>
  )
}

export default connect()(Ping)
