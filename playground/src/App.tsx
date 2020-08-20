import React from 'react';
import './App.css';
import { MyComponent, Meh } from './component-lib'

function App() {
  return (
    <div className="App">
      <MyComponent text='some text' color='green' />
      <Meh text='some orange text' color='orange' />
    </div>
  );
}

export default App;
