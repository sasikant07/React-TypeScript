import React from 'react';
import logo from './logo.svg';
import './App.css';
import CustomButton from './components/html/Button';

function App() {
  return (
    <div className="App">
      <CustomButton variant='primary' onClick={() => console.log('Clicked')}>
        Primary Button
      </CustomButton>
    </div>
  );
}

export default App;
