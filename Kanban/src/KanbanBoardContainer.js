import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import KanbanBoard from './KanbanBoard'
import * as cardActions from './actions/cardActions'
import {bindActionCreators} from 'redux'

class KanbanBoardContainer extends Component {
  constructor () {
    super()
    this.addTask = this.addTask.bind(this)
    this.removeTask = this.removeTask.bind(this)
  }

  addTask (cardId, task) {
    this.props.actions.addTask(cardId, task)
  }

  removeTask (cardId, taskId) {
    this.props.actions.removeTask(cardId, taskId)
  }

  render () {
    return (
      <KanbanBoard
        cards={this.props.cards}
        taskCallbacks={{
          add: this.addTask,
          remove: this.removeTask
        }} />
    )
  }
}

KanbanBoardContainer.propTypes = {
  cards: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps (state, ownProps) {
  return {
    cards: state.cards
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(cardActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(KanbanBoardContainer)
