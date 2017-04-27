import React, {Component} from 'react'
import PropTypes from 'prop-types'

class ContactsAppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: []
    };
  }
  componentDidMount() {
    fetch('https://swapi.co/api/people/?format=json')
      .then(response => response.json())
      .then(({results: items}) => this.setState({contacts: items}))
  }

  render() {
    return (<ContactsApp contacts={this.state.contacts}/>);
  }
}

class ContactsApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filterText: ''
    };
    this.handleUserInput = this
      .handleUserInput
      .bind(this);
  }

  handleUserInput(searchTerm) {
    this.setState({filterText: searchTerm})
  }

  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          onUserInput={this.handleUserInput}/>
        <ContactList contacts={this.props.contacts} filterText={this.state.filterText}/>
      </div>
    )
  }
}
ContactsApp.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object)
}

class SearchBar extends Component {
  constructor(props)
  {
    super(props)
    this.handleChange = this
      .handleChange
      .bind(this);
  }

  handleChange(event) {
    this
      .props
      .onUserInput(event.target.value)
  }

  render() {
    return <input
      type="search"
      placeholder="search"
      value={this.props.filterText}
      onChange={this.handleChange}/>
  }
}
SearchBar.propTypes = {
  onUserInput: PropTypes.func.isRequired,
  filterText: PropTypes.string.isRequired
}

class ContactList extends Component {
  render() {
    let filteredContacts = this
      .props
      .contacts
      .filter((contact) => contact.name.indexOf(this.props.filterText) !== -1);
    return (
      <ul>
        {filteredContacts.map(contact => <Contact key={contact.name} contact={contact}/>)}
      </ul>
    )
  }
}
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  filterText: PropTypes.string.isRequired
}

const Contact = (props) => <h4>{props.contact.name}</h4>

export default ContactsAppContainer