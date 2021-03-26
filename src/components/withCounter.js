import React from 'react';

const UpdatedComponent = (OriginalComponent) => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      }
      this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler() {
      this.setState((prevState) => {
        return {count: prevState.count + 1}
      });
    }

    render() {
      return <OriginalComponent count={this.state.count} clickHandler={this.clickHandler}/>
    }
  }

  return NewComponent;
}

export default UpdatedComponent;
