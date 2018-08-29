import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import rootReducer from './reducers'
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import thunk from 'redux-thunk'
import ChatAPI from './services/ChatAPI'

const api = new ChatAPI()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const enhancer = composeEnhancers(applyMiddleware(thunk.withExtraArgument(api)))

const store = createStore(rootReducer,enhancer)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>, document.getElementById('root'));


registerServiceWorker();
