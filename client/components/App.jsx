import React from 'react'
import {Route} from 'react-router-dom'

import ErrorMessage from './ErrorMessage'
import WaitIndicator from './WaitIndicator'
import Header from './Header'
import NewPing from './NewPing'
import Profile from './Profile'

const App = () => (
  <div className='app'>
    <Header />
    <ErrorMessage />
    <Route exact path='/' component={() => <h1>Pings</h1>} />
    <Route exact path='/newping' component={NewPing} />
    <Route exact path='/profile' component={Profile} />
    <WaitIndicator />
    <Pings />
  </div>
)

export default App
