import React from 'react'
import { connect } from 'react-redux'

const Ping = () => {
  return (
    <div className='ping-container'>
      <div className='photo'>
        Profile photo
      </div>
      <div className='image'>
        Image
      </div>
      <div className='photo'>
        Profile photo
      </div>
      
    </div>
  )
}


export default connect()(Ping)
