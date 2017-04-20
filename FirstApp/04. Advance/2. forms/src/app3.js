import React, { Component } from 'react';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: "React-3"
    };
  }

  handleChange(event) {
    this.setState({searchTerm: event.target.value});
  }

  render() {
    return (
      <div>
        Search Term:
        <input type="search" value={this.state.searchTerm}
                onChange={this.handleChange.bind(this)} />
      </div>
    )
  }
}


React.render(<Search />, document.getElementById("root"));