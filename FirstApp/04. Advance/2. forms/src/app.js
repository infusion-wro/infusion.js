import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <div>
        Search Term: <input type="search" value="React" />
      </div>
    )
  }
}

React.render(<Search />, document.getElementById("root"));