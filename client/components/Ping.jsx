import React from 'react'
import { connect } from 'react-redux'

const Ping = (props) => {
  return (
    <div className='ping-container'>
      <div className='photo'>
        Sender:{props.ping.senderPhoto}
      </div>
      
      <div className='image'>
        Image:{props.ping.imageUrl}
      </div>
      
      <div className='photo'>
        Recepient:{props.ping.recepientPhoto}
      </div>
      <br/>
    </div>
  )
}

export default connect()(Ping)
