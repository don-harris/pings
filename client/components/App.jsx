import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import ErrorMessage from './ErrorMessage'
import WaitIndicator from './WaitIndicator'

const App = () => (
  <div className='app'>
    <ErrorMessage />
    <Route exact path='/' component={() => <h1>Pings</h1>} />
    <Route exact path='/new' component={() => <h1>New Ping</h1>} />
    <Route exact path='/profile' component={() => <h1>Profile</h1>} />
    <WaitIndicator />
  </div>
)

export default App
