import * as types from '../actions/actionTypes'
import initialState from '../store/initialState'

function generateId () {
  return Math.random().toString(16).slice(2)
}

export default function cardReducer (state = initialState.cards, action) {
  let card, tasks
  switch (action.type) {
    case types.ADD_TASK:
      card = state.find(c => c.id === action.cardId)
      let newTask = Object.assign({}, { id: generateId(), done: false }, {name: action.task})
      tasks = [...card.tasks, newTask]
      return [...state.filter(c => c.id !== action.cardId),
        Object.assign({}, card, {tasks})]
    case types.REMOVE_TASK:
      card = state.find(c => c.id === action.cardId)
      tasks = card.tasks.filter(t => t.id !== action.taskId)
      return [...state.filter(c => c.id !== action.cardId),
        Object.assign({}, card, {tasks: tasks})]
    default:
      return state
  }
}
