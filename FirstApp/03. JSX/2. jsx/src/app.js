import React from 'react';

class Hello extends React.Component {

  constructor() {
    super();
    this.state = {
      clicked: false
    };
    
    this.activateLasers = this.activateLasers.bind(this);
  }

  activateLasers() {
    this.setState({clicked: true});
  }

  render() {
    return (
      <div>
        {
          this.state.clicked && 
          <h1>fire</h1>
        }
        <h1>Hello World</h1>
        
        <button onClick={this.activateLasers}>
          Activate Lasers
        </button>
      </div>
    );
  }
}

React.render(<Hello />, document.getElementById("root"));