import React from 'react'
import HelloWorld from './HelloWorld'
import Slider from './Slider'
import Bar from './Bar'
import LikeButton from './LikeButton'

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      stuff: 'wdi15'
    }
  }

  render() {
      // class is taken on JS so use className
    return <div>
      <HelloWorld name="codebusters"/>
      <h2>testing</h2>
      <HelloWorld name={this.state.stuff}
      />
      <Slider />
      <Slider startValue="5" />
      <Bar width="19%"/>
      <Bar width="68%" color="lime"/>
      <LikeButton />
    </div>
  }

}
