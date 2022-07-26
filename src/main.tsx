import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { searcherReducer } from './reducers/searcher'
import { Provider } from 'react-redux'
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux'
import thunk from 'redux-thunk'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  }
}

const composers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const composedEnhancers = composers(applyMiddleware(thunk))

const store = createStore(searcherReducer, composedEnhancers)

export type AppDispatch = typeof store.dispatch

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
