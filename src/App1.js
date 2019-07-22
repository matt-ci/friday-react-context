import React from 'react';

import './App.css';
import Counter1 from "./Counter1";

function App1(props) {
  console.log('<App1> render')

  return (
    <div className="App1">
      <div className="well">1.Using React.Context. If one counter updates, all 3 blocks are re-rendered as does the
        wrapping context component 😬
      </div>
      <Counter1 item="a"/>
      <Counter1 item="b"/>
      <Counter1 item="c"/>
    </div>
  );
}


export default App1;
