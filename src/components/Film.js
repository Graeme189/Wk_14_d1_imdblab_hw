import React, {Component} from 'react';

class Film extends Component {
  render() {
    return (
      <>
      <p>{this.props.children}</p>
      </>
    );
  }
}

export default Film;
