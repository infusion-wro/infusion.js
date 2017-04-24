import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Card from './Card'

class List extends Component {
  render () {
    var cards = this.props.cards.map((card) => {
      return <Card key={card.id}
        title={card.title}
        color={card.color}
        description={card.description}
        tasks={card.tasks} />
    })

    return (
      <div className='list'>
        <h1>{this.props.title}</h1>
        {cards}
      </div>
    )
  }
};

List.propTypes = {
  cards: PropTypes.array,
  title: PropTypes.string
}

export default List
