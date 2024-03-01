import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/global.css'
import Router from './components/ui/Router'
import traditionalStore from './app/store'
import { Provider } from 'react-redux'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={traditionalStore}>
    <Router />
  </Provider>,
)
