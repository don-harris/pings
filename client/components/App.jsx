import React from 'react'
import {Route} from 'react-router-dom'
import {connect} from 'react-redux'

import Header from './Header'
import ErrorMessage from './ErrorMessage'
import WaitIndicator from './WaitIndicator'
import NewPing from './NewPing'
import Profile from './Profile'
import Pings from './Pings'
import Register from './Register'
import SignIn from './SignIn'

import {kioskOff} from '../actions/kiosk-mode'

const App = (props) => (
  <div className='app'>
    {!props.isKioskMode && <Header />}
    <WaitIndicator />
    <ErrorMessage />
    <div onClick={() => props.dispatch(kioskOff())}>
      <Route exact path='/' component={Pings} />
    </div>
    <Route path='/new' component={NewPing} />
    <Route path='/profile' component={Profile} />
    <Route path='/register' component={Register} />
    <Route path='/signin' component={SignIn} />
  </div>
)

const mapStateToProps = (state) => {
  return {
    isKioskMode: state.isKioskMode
  }
}

export default connect(mapStateToProps)(App)
