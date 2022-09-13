import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/class/Counter';

function App() {
  return (
    <div className="App">
      <Counter message='The Count value is '/>
    </div>
  );
}

export default App;
