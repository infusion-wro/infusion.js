import * as types from './actionTypes'

// Action creator
export function addTask (cardId, task) {
  return { type: types.ADD_TASK, cardId, task }
}

export function removeTask (cardId, taskId) {
  return { type: types.REMOVE_TASK, cardId, taskId }
}
