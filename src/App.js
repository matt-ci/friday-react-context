import React from 'react';

import './App.css';
import Counter from "./Counter";

function App() {
  return (
    <div className="App">
      If one counter updates, all components are re-rendered.
    <Counter item="a"/>
    <Counter item="b"/>
    <Counter item="c"/>
    </div>
  );
}

export default App;
