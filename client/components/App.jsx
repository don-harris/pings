import React from 'react'
import {Route} from 'react-router-dom'

import Header from './Header'
import ErrorMessage from './ErrorMessage'
import WaitIndicator from './WaitIndicator'
import NewPing from './NewPing'
import Profile from './Profile'
import Pings from './Pings'

const App = () => (
  <div className='app'>
    <Header />
    <WaitIndicator />
    <ErrorMessage />
    <Route exact path= '/' component={Pings} />
    <Route exact path='/new' component={NewPing} />
    <Route exact path='/profile' component={Profile} />
  </div>
)

export default App
