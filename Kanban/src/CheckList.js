import React, { Component } from 'react'
import PropTypes from 'prop-types'

class CheckList extends Component {
  constructor () {
    super()
    this.onKeyPress = this.onKeyPress.bind(this)
    this.removeTask = this.removeTask.bind(this)
  }

  onKeyPress (event) {
    if (event.key === 'Enter' && event.target.value !== '') {
      this.props.taskCallbacks.add(this.props.cardId, event.target.value)
      event.target.value = ''
    }
  }

  removeTask (taskId) {
    this.props.taskCallbacks.remove(this.props.cardId, taskId)
  }

  render () {
    let tasks = this.props.tasks.map((task) => (
      <li key={task.name} className='checklist__task'>
        <input type='checkbox' defaultChecked={task.done} />
        {task.name}
        <a href='#' className='checklist__task--remove' onClick={() => this.removeTask(task.id)} />
      </li>
    ))

    return (
      <div className='checklist'>
        <ul>{tasks}</ul>
        <input type='text'
          className='checklist--add-task'
          placeholder='Type then hit Enter to add a task'
          onKeyPress={this.onKeyPress} />
      </div>
    )
  }
}

CheckList.propTypes = {
  cardId: PropTypes.number.isRequired,
  tasks: PropTypes.array.isRequired,
  taskCallbacks: PropTypes.object.isRequired
}

export default CheckList
