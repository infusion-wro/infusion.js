import * as types from './actionTypes'

export function addTask (cardId, task) {
  return { type: types.ADD_TASK, cardId, task }
}

export const removeTask = (cardId, taskId) => {
  return { type: types.REMOVE_TASK, cardId, taskId }
}
