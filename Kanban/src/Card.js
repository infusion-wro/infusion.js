import React, { Component } from 'react'
import PropTypes from 'prop-types'
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
    this.setState(prevState => ({ showDetails: !prevState.showDetails }))
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
    }

    const sideColor = {
      position: 'absolute',
      zIndex: -1,
      top: 0,
      bottom: 0,
      left: 0,
      width: 7,
      backgroundColor: this.props.color
    }

    return (
      <div className='card'>
        <div style={sideColor} />
        <div className={this.state.showDetails ? 'card__title card__title--is-open' : 'card__title'}
          onClick={this.toggleDetails}>
          {this.props.title}
        </div>
        {cardDetails}
      </div>
    )
  }
}

const titlePropTypes = (props, propName, componentName) => {
  if (props[propName]) {
    const value = props[propName]
    if (typeof value !== 'string' || value.length > 50) {
      return Error(`Value of ${propName}: '${value}' in ${componentName} is too long`)
    }
  }
}

Card.propTypes = {
  id: PropTypes.number,
  tasks: PropTypes.array,
  title: titlePropTypes,
  description: PropTypes.string.isRequired,
  color: PropTypes.string
}

Card.defaultProps = {
  color: 'pink'
}

export default Card
