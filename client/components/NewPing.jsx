import {connect} from 'react-redux'
import React from 'react'
import {postPingAsync} from '../actions/pings'

class NewPing extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      recipientId: null,
      imageUrl: null,
      senderId: props.currentUser.id
    }
    this.selectRecipient = this.selectRecipient.bind(this)
    this.selectImage = this.selectImage.bind(this)
    this.submitInfo = this.submitInfo.bind(this)
  }

  selectRecipient (evt) {
    this.setState({recipientId: Number(evt.target.value)})
  }

  selectImage (evt) {
    this.setState({imageUrl: evt.target.value})
  }

  submitInfo (evt) {
    evt.preventDefault()    
    const goHome = () => this.props.history.push('/')
    this.props.dispatch(postPingAsync(this.state, goHome))
  }

  render () {
    const {users, currentUser} = this.props
    const recipient = users.find(user => user.id == this.state.recipientId)
    return (
      <div>
        <img src={currentUser.photo_url} />
        <img src={this.state.imageUrl || 'http://cumbrianrun.co.uk/wp-content/uploads/2014/02/default-placeholder-300x300.png'} />
        <img src={recipient ? recipient.photo_url : 'https://www.wsxenterprise.co.uk/wp-content/uploads/2015/11/blank-profile-picture-973461_1280-300x300.png'} />
        <form onSubmit={this.submitInfo}>
          <label>Image:
            <input type="text" onChange={this.selectImage}/>
          </label>
          <select onChange={this.selectRecipient}  className="selector">
            <option selected disabled >Select user</option>
            {users.map(user => {
              return (<option key={user.id} value={user.id}>{user.name}</option>)
            })}
          </select>
          <input type="submit" value="Ping!"/>
        </form >
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
