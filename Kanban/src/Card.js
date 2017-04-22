import React, { Component, PropTypes } from 'react'
import CheckList from './CheckList'

class Card extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      showDetails: false
    }
    this.toggleDetails = this.toggleDetails.bind(this)
  };

  toggleDetails () {
    this.setState({showDetails: !this.state.showDetails})
  }

  render () {
    let cardDetails
    if (this.state.showDetails) {
      cardDetails = (
        <div className='card__details'>
          {this.props.description}
          <CheckList cardId={this.props.id} tasks={this.props.tasks} />
        </div>
      )
    };
    return (
      <div className='card'>
        <div className={this.state.showDetails ? 'card__title card__title--is-open' : 'card__title'}
          onClick={this.toggleDetails}>
          {this.props.title}
        </div>
        {cardDetails}
      </div>
    )
  }
}

Card.propTypes = {
  id: PropTypes.number,
  tasks: PropTypes.array,
  title: PropTypes.string,
  description: PropTypes.string
}

export default Card
