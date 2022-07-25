import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { searcherReducer } from './reducers/searcher'
import { Provider } from 'react-redux'
import { legacy_createStore as createStore } from 'redux'

const store = createStore(searcherReducer)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
