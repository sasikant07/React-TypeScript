import React from 'react';
import logo from './logo.svg';
import './App.css';
import Text from './components/polymorphic/Text';

function App() {
  return (
    <div className="App">
      <Text as='h1' size="md">Heading</Text>
      <Text as='p' size="lg">Paragraph</Text>
      <Text as='label' htmlFor='someId' size="sm" color='secondary'>Label</Text>
    </div>
  );
}

export default App;
