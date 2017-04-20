import React, { Component } from 'react';

class Search extends Component {

  handleSubmit(event) {
    console.log("Submitted values are: ",
      event.target.name.value,
      event.target.email.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="formGroup">
          Name: <input name="name" type="text" />
        </div>
        <div className="formGroup">
          E-mail: <input name="email" type="mail" />
        </div>
        <button type="submit">Submit</button>
      </form>
    )
  }
}


React.render(<Search />, document.getElementById("root"));