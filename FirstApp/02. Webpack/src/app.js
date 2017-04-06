import React from 'react';

class Hello extends React.Component {
  render() {
    const value = 'asd';
    return (
      
      <h1>Hello World { value }</h1>
    );
  }
}

React.render(<Hello />, document.getElementById("root"));