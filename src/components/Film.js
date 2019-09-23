import React, {Component} from 'react';

class Film extends Component {
  render() {
    return (
      <>
      <h3>{this.props.name}</h3>
      <p>{this.props.children}</p>
      </>
    );
  }
}

export default Film;
