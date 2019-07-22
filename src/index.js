import React, {useReducer} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux'
import './index.css';
import App1 from './App1';
import App2 from './App2';
import { StoreProvider} from "./Store1";
import * as serviceWorker from './serviceWorker';
import {logger} from "./middleware";

const initialState1 = {
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
  const [state, dispatch] = useReducer(reducer1, initialState1);
  const eventHandlers = {
    increment(key){
      dispatch({type:'increment', key})
    },
  };

  /*
    TODO
    We get a lot of unecessary renders.
    b/c of state changes
    If we used Redux would this fix it?
   */

  return (
    <StoreProvider state={state} eventHandlers={eventHandlers}>
      {props.children}
    </StoreProvider>
  );
};


const reducer2 = (state={...initialState1}, action)=>{
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

class App1Wrapper extends React.Component{
  render(){
      console.log('<App1Wrapper> render')
    return <StoreComponent ><App1 /></StoreComponent>
  }
}

ReactDOM.render(<App1Wrapper/>, document.getElementById('root1'));
ReactDOM.render(<Provider store={store2}><App2/></Provider>, document.getElementById('root2'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
