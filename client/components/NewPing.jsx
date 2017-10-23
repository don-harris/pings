import {connect} from 'react-redux'
import React from 'react'

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
          Image: <input type="text"/><br/>
          <select name="" className="selector">
            <option selected disabled >Select user</option>
            {this.props.users.map(user => {
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
  return {
    users: state.users
  }
}

export default connect(mapStateToProps)(NewPing)
