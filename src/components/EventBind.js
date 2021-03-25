import React, { Component } from 'react';

export default class EventBind extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Hello',
    }
    this.clickHandler = this.clickHandlerFunc.bind(this);
  }
  clickHandlerFunc() {
    this.setState({
      message: 'Bye',
    })
  }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}
