import React from 'react';
import logo from './logo.svg';
import './App.css';
import RandomNumber from './components/restriction/RandomNumber';

function App() {
  return (
    <div className="App">
      <RandomNumber value={10} isPositive/>
    </div>
  );
}

export default App;
