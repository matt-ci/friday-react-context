import React, {useReducer} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux'
import './index.css';
import App1 from './App1';
import App2 from './App2';
import { StoreProvider} from "./Store1";
import {logger} from "./middleware";

const initialState = {
  a: 0,
  b: 0,
  c: 0
};

function reducer1(state, action) {
  switch (action.type) {
    case 'increment':
      return {...state, [action.key]: state[action.key] + 1};
    default:
      throw new Error();
  }
}

const StoreComponent = (props) => {
  const [state, dispatch] = useReducer(reducer1, {...initialState});
  const eventHandlers = {
    increment(key){
      dispatch({type:'increment', key})
    },
  };
  return (
    <StoreProvider state={state} eventHandlers={eventHandlers}>
      {props.children}
    </StoreProvider>
  );
};
ReactDOM.render(<StoreComponent><App1 /></StoreComponent>, document.getElementById('root1'));



const reducer2 = (state={...initialState}, action)=>{
   switch (action.type) {
    case 'increment':
      return {...state, [action.key]: state[action.key] + 1};
    default:
      return state;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store2 = createStore(reducer2, /* preloadedState, */ composeEnhancers(
  applyMiddleware(logger)
  ));


ReactDOM.render(<Provider store={store2}><App2/></Provider>, document.getElementById('root2'));


