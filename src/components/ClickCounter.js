import React, { Component } from 'react';
import UpdatedComponent from './withCounter';

class ClickCounter extends Component {


  render() {
    const {count, clickHandler} = this.props;
    return (
      <div>
        <button onClick={clickHandler}>Click {count} times</button>
      </div>

    )
  }
}

export default UpdatedComponent(ClickCounter);
