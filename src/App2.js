import React from 'react';

import './App.css';
import Counter2 from "./Counter2";

function App2(props) {
  return (
    <div className="App2">
      <div className="well">Using react-redux @next</div>

        <Counter2 item="a"/>
        <Counter2 item="b"/>
        <Counter2 item="c"/>

    </div>
  );
}

export default App2;
