import React, { Component, PropTypes } from 'react'

class CheckList extends Component {
  render () {
    let tasks = this.props.tasks.map((task) => (
      <li className='checklist__task'>
        <input type='checkbox' defaultChecked={task.done} />
        {task.name}
        <a href='#' className='checklist__task--remove' />
      </li>
    ))

    return (
      <div className='checklist'>
        <ul>{tasks}</ul>
      </div>
    )
  }
}

CheckList.propTypes = {
  tasks: PropTypes.array
}

export default CheckList
