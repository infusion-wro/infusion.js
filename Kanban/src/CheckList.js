import React, { Component, PropTypes } from 'react'

class CheckList extends Component {

  constructor () {
    super()
    this.handleRemove = this.handleRemove.bind(this)
  }

  handleRemove (e) {
    e.preventDefault()
    console.log('click delete')
  }

  render () {
    let tasks = this.props.tasks.map((task) => (
      <li key={task.name} className='checklist__task'>
        <input type='checkbox' defaultChecked={task.done} />
        {task.name}
        <a href='#' className='checklist__task--remove' onClick={this.handleRemove} />
      </li>
    ))

    return (
      <div className='checklist'>
        <ul>{tasks}</ul>
        <input type='text'
          className='checklist--add-task'
          placeholder='Type then hit Enter to add a task' />
      </div>
    )
  }
}

CheckList.propTypes = {
  tasks: PropTypes.array
}

export default CheckList
