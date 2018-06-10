import React from 'react'
import passwordMeter from '../../lib/passwordMeter'

export default class PasswordInput extends React.Component {

  constructor(props) { //method: function that belongs to class
    super(props) 
    this.handleChange = this.handleChange.bind(this);
    this.state = { 
      password: {
        value: '',
        capitalLetters: false,
      } 
    }
  }

  //this function returns either true or false
  capitalLetters(password) {
    return password.split('').some(function(letter){
      return letter.toUpperCase() === letter
    })
  }

  lowerLetters(password) {
    return password.split('').some(function(letter){
      return letter.toLowerCase() === letter
    })
  }

  hasNumber(password) {
    return password.split('').some(function(letter){
      return letter.toInteger() === letter
    })
  }

  handleChange(event) {
    this.setState({
      password: {
        value: event.target.value,
        capitalLetters: this.capitalLetters(event.target.value),
      }
    })
  }
//wheever we modify data, the render is being called
// {} => handlebars; similar to erb tags in ruby
  render() {
    const strength = passwordMeter(this.state.password)

    return <div>
      <h1>Type your password</h1>
      <input type="password"  
        onChange={this.handleChange} />
      <span className={strength}>{strength}</span>
    </div>
  }

}