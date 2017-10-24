import {connect} from 'react-redux'
import React from 'react'

class NewPing extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      recepientId: null,
      image_url: null,
      senderId: props.currentUser.id
    }
    this.selectRecepient = this.selectRecepient.bind(this)
    this.selectImage = this.selectImage.bind(this)
    this.submitInfo = this.submitInfo.bind(this)
  }

  selectRecepient (evt) {
    this.setState({recepientId: Number(evt.target.value)})
  }

  selectImage (evt) {
    this.setState({image_url: evt.target.value})
  }

  submitInfo (evt) {
    evt.preventDefault()
    console.log(this.state) // shows what's being posted
  }

  render () {
    const {users, currentUser} = this.props
    const recepient = users.find(user => user.id == this.state.recepientId)
    return (
      <div>
        <img src={currentUser.photo_url} />
        <img src={this.state.image_url || 'http://cumbrianrun.co.uk/wp-content/uploads/2014/02/default-placeholder-300x300.png'} />
        <img src={recepient ? recepient.photo_url : 'https://www.wsxenterprise.co.uk/wp-content/uploads/2015/11/blank-profile-picture-973461_1280-300x300.png'} />
        <form onSubmit={this.submitInfo}>
          <label>Image:
            <input type="text" onChange={this.selectImage}/>
          </label>
          <select onChange={this.selectRecepient} name="" className="selector">
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
