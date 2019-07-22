import React, {useReducer} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StoreProvider} from "./Store";
import * as serviceWorker from './serviceWorker';

const initialState = {
  a: 0,
  b: 0,
  c:0
};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {...state, [action.key]: state[action.key] + 1};
    default:
      throw new Error();
  }
}

const StoreComponent = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
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
      <App />
    </StoreProvider>
  );
};

ReactDOM.render(<StoreComponent />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
