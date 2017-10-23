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
        <img src={this.props.currentUser.photo_url} />
        <img/>
        <img/>
        <form>
          Image: <input type="text"/><br/>
          <select name="" className="selector">
            <option selected disabled >Select user</option>
            {this.props.users.map(user => {
              return (<option key={user.id} value={user.name}>{user.name}</option>)
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
    users: state.users.filter(user => user.id !== state.currentUser.id),
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(NewPing)
