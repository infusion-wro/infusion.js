import React, { Component } from 'react';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: "React-2"
    };
  }

  render() {
    return (
      <div>
        Search Term2:
        <input type="search" value={this.state.searchTerm} />
      </div>
    )
  }
}


React.render(<Search />, document.getElementById("root"));