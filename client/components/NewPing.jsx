import {connect} from 'react-redux'
import React from 'react'

class NewPing extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      recepientId: null,
      imageUrl: null,
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
    this.setState({imageUrl: evt.target.value})
  }

  submitInfo (evt) {
    evt.preventDefault()
    console.log(this.state) // shows what's being posted
  }
  validator() {
    const {recepientId, imageUrl, senderId} = this.state
    return recepientId && imageUrl && senderId
  }
  render () {
    const {users, currentUser} = this.props
    const recepient = users.find(user => user.id == this.state.recepientId)
    return (
      <div className="container has-text-centered">
        <div className="section">
          <img src={currentUser.photo_url} className="images" />
          <img src={this.state.imageUrl || 'http://cumbrianrun.co.uk/wp-content/uploads/2014/02/default-placeholder-300x300.png'} className="images"  alt="don't be silly"/>
          <img src={recepient ? recepient.photo_url : 'https://www.wsxenterprise.co.uk/wp-content/uploads/2015/11/blank-profile-picture-973461_1280-300x300.png'} className="images" />
        </div>
        <form onSubmit={this.submitInfo}>
          <label className="label is-large">Image URL: 
            <p className=" field control has-icons-left">
              <input type="text" className="input is-large" placeholder="image address" onChange={this.selectImage}/>
              <span className="icon is-small is-left">
                <i className="fa fa-file-image-o"></i>
              </span>
            </p>
          </label>
          <select onChange={this.selectRecepient}  className="selector button is-large is-info">
            <option selected disabled >Select user</option>
            {users.map(user => {
              return (<option key={user.id} value={user.id}>{user.name}</option>)
            })}
          </select>
          <input className={`button is-large ${this.validator() ? 'is-success' : 'is-danger'}`} type="submit" value="Ping!"/>
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
