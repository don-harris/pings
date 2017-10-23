import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import ErrorMessage from './ErrorMessage'
import WaitIndicator from './WaitIndicator'
import NewPing from './NewPing'
import Profile from './Profile'

const App = () => (
  <div className='app'>
    <ErrorMessage />
    <Route exact path='/' component={() => <h1>Pings</h1>} />
    <Route exact path='/newping' component={NewPing} />
    <Route exact path='/profile' component={Profile} />
    <WaitIndicator />
  </div>
)

export default App
