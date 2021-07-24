import { applyMiddleware, compose, createStore } from "redux";
import thunk from 'redux-thunk'
import reducer from './reducer'
declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
  }
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(reducer, composeEnhancers(applyMiddleware(thunk)))
