import React, { Component } from 'react';
import UpdatedComponent from './withCounter';

class HoverCounter extends Component {

  render() {
    const {count,clickHandler} = this.props;
    return (
      <h1 onMouseOver={clickHandler}>Hovered {count} times</h1>

    )
  }
}

export default UpdatedComponent(HoverCounter);
