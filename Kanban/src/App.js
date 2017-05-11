import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import KanbanBoardContainer from './KanbanBoardContainer'
import configureStore from './store/configureStore'

let store = configureStore()

render(
  <Provider store={store}>
    <KanbanBoardContainer />
  </Provider>
  , document.getElementById('root'))
