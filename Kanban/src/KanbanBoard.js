import React from 'react'
import PropTypes from 'prop-types'
import List from './List'

const KanbanBoard = ({cards, taskCallbacks}) => {
  const todoCards = cards.filter((card) => card.status === 'todo')
  const inProgressCards = cards.filter((card) => card.status === 'in-progress')
  const doneCards = cards.filter((card) => card.status === 'done')

  return (
    <div className='app'>
      <List key='todo'
        title='To Do'
        cards={todoCards}
        taskCallbacks={taskCallbacks} />
      <List key='in-progress'
        title='In Progress'
        cards={inProgressCards}
        taskCallbacks={taskCallbacks} />
      <List key='done'
        title='Done'
        cards={doneCards}
        taskCallbacks={taskCallbacks} />
    </div>
  )
}

KanbanBoard.propTypes = {
  cards: PropTypes.array.isRequired,
  taskCallbacks: PropTypes.object.isRequired
}

export default KanbanBoard
