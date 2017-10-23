import React from 'react'

import ErrorMessage from './ErrorMessage'
import WaitIndicator from './WaitIndicator'
import Header from './Header'

const App = () => (
  <div className='app'>
    <Header />
    <ErrorMessage />
    <WaitIndicator />
    <Pings />
  </div>
)

export default App
