import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/generics/List';

function App() {
  return (
    <div className="App">
      {/* <List items={["Batman", "Superman", "Wonder Woman"]} onClick={(item) => console.log(item)} />
      <List items={[0, 1, 2]} onClick={(item) => console.log(item)} /> */}

      <List items={[
        {
          id: 1,
          first: 'Bruce',
          last: 'Wayne'
        },
        {
          id: 2,
          first: 'Clark',
          last: 'Kent'
        },
        {
          id: 3,
          first: 'Princess',
          last: 'Diana'
        }
      ]} onClick={(item) => console.log(item)} />
    </div>
  );
}

export default App;
