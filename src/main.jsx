import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { store } from './store'
import { Provider } from 'react-redux'

import { PokemonApp } from './PokemonApp'
import './index.css'
import { TodoApp } from './TodoApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <App /> */}
      <PokemonApp />
      {/* <TodoApp /> */}
    </Provider>
  </React.StrictMode>,
)
