import React from 'react'
import './LikeButton.scss'

export default class LikeButton extends React.Component {
  constructor(props) {
    super(props)
    this.onClick = this.onClick.bind(this)
    this.state = {
      value: this.props.startValue || 0
    }
  }

  onClick() {
    this.setState({ 
      value: this.state.value += 1
    })
  }

  render() {
    return <div className="btn-container">
      <div className="like-btn">
        <button 
        onClick={this.onClick}>Like!</button>
      </div>
      <input 
        type="text" 
        value={this.state.value} 
        />
    </div>
  }
}
