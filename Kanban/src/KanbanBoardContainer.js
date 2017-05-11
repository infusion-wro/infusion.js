import React, { Component } from 'react'
import PropTypes from 'prop-types'
import KanbanBoard from './KanbanBoard'
import {connect} from 'react-redux'

class KanbanBoardContainer extends Component {
  addTask (cardId, task) {
    // ...
  }

  removeTask (cardId, taskId) {
    // ...
  }

  render () {
    return (
      <KanbanBoard
        cards={this.props.cards} />
    )
  }
}

KanbanBoardContainer.propTypes = {
  cards: PropTypes.array.isRequired
}

function mapStateToProps (state) {
  return {
    cards: state.cards
  }
}

export default connect(mapStateToProps)(KanbanBoardContainer)
