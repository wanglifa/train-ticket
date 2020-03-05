import * as React from "react";
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import 'normalize.css/normalize.css'
import store from './store'
import './index.css'
import App from './App'
ReactDOM.render(
  // @ts-ignore
  <Provider store={store}>
    <App/>
  </Provider>
  , document.querySelector('#root')
)