import React, { Component } from 'react';

export default class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    }
  }

  increaseCounter() {
    // this.setState({
    //   count: this.state.count += 1,
    // })

    this.setState((prevState) => ({
      count: prevState.count += 1,
    }), () => console.log(this.state.count));
  }

  increaseByFive() {
    this.increaseCounter();
    this.increaseCounter();
    this.increaseCounter();
    this.increaseCounter();
    this.increaseCounter();
  }

  render() {
    return (
      <div>
        <p>counter: {this.state.count}</p>
        <button onClick={() => this.increaseByFive()}>Increase counter</button>
      </div>
    )
  }
}
