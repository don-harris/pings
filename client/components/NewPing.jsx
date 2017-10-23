import {connect} from 'react-redux'
import React from 'react'
import data from '../../data.js'

class NewPing extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }
  render () {
    return (
      <div>
        <img/><img/><img/>
        <form>
          <input type="text"/><br/>
          <select name="" className="selector">
            <option selected disabled >Select user</option>
            {data.users.map(user => {
              console.log(user.name)
              return (<option value={user.name}>{user.name}</option>)
            })}
          </select>
          <br/>
          <input type="button" value="Ping!"/>
        </form>
      </div>
    )
  }
}

function mapStateToProps (state) {

}

export default connect()(NewPing)
