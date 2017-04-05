import React, { Component, PropTypes } from 'react'
import List from './List'

class KanbanBoard extends Component {
  render () {
    const todoCards = this.props.cards.filter((card) => card.status === 'todo')
    const inProgressCards = this.props.cards.filter((card) => card.status === 'in-progress')
    const doneCards = this.props.cards.filter((card) => card.status === 'done')

    return (
      <div className='app'>
        <List id='todo'
          title='To Do'
          cards={todoCards} />
        <List id='in-progress'
          title='In Progress'
          cards={inProgressCards} />
        <List id='done'
          title='Done'
          cards={doneCards} />
      </div>
    )
  }
};

KanbanBoard.propTypes = {
  cards: PropTypes.array
}

export default KanbanBoard
