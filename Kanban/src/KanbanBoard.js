import React, { Component } from 'react'
import PropTypes from 'prop-types'
import List from './List'

class KanbanBoard extends Component {
  render () {
    const todoCards = this.props.cards.filter((card) => card.status === 'todo')
    const inProgressCards = this.props.cards.filter((card) => card.status === 'in-progress')
    const doneCards = this.props.cards.filter((card) => card.status === 'done')

    return (
      <div className='app'>
        <List key='todo'
          title='To Do'
          cards={todoCards}
          taskCallbacks={this.props.taskCallbacks} />
        <List key='in-progress'
          title='In Progress'
          cards={inProgressCards}
          taskCallbacks={this.props.taskCallbacks} />
        <List key='done'
          title='Done'
          cards={doneCards}
          taskCallbacks={this.props.taskCallbacks} />
      </div>
    )
  }
};

KanbanBoard.propTypes = {
  cards: PropTypes.array,
  taskCallbacks: PropTypes.object
}

export default KanbanBoard
