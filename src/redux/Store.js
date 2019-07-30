import { createStore } from 'redux'

const todos = [
  { id: 1, name: "Call dad", complete: true},
  { id: 2, name: "Walk the dog", complete: false},
  { id: 3, name: "Read Slack", complete: false},
  { id: 4, name: "Procrastinate on coming up with project ideas", complete: true},
  { id: 5, name: "Go to study group", complete: false}
]


function todosReducer(state = todos, action) {
  switch (action.type) {
    default:
      return state
  }
}

let store = createStore(todosReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store