import React from 'react';

class Hello extends React.Component {
  activateLasers() {
    console.log('lasers activated.')
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <button onClick={this.activateLasers}>
          Activate Lasers
        </button>
      </div>
    );
  }
}

React.render(<Hello />, document.getElementById("root"));