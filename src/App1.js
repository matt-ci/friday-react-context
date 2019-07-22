import React from 'react';

import './App.css';
import Counter1 from "./Counter1";

function App1(props) {
  return (
    <div className="App1">
      <div className="well">Using React.Context. If one counter updates, all components are re-rendered - including the App frame itself 😬</div>
    <Counter1 item="a"/>
    <Counter1 item="b"/>
    <Counter1 item="c"/>
    </div>
  );
}

export default App1;
