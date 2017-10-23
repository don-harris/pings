import React from 'react'

import ErrorMessage from './ErrorMessage'
import WaitIndicator from './WaitIndicator'
import Header from './Header'

const App = () => (
  <div className='app'>
    < Header />
    <ErrorMessage />
    <WaitIndicator />
  </div>
)

export default App
