import React, { Component } from 'react';

export default class UserGreeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true,
    }
  }

  render() {
    // if (this.state.isLoggedIn) {
    //   return <div>Wecome Back</div>
    // }
    // return <div>Log</div>
    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>Welcome Back</div>
    // } else {
    //   message = <div>Login</div>
    // }
    // return message;


    // return (
    //   this.state.isLoggedIn ? <div>WelcomeBack</div> : <div>Login</div>
    // )


    return this.state.isLoggedIn && <div>Welcome Back</div>

  }
}
