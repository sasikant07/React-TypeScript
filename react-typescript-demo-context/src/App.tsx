import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ThemeContextProvider } from './components/context/ThemeContext';
import Box from './components/context/Box';
import { UserContextProvider } from './components/context/UserContext';
import User from './components/context/User';

function App() {
  return (
    <div className="App">
      {/* <ThemeContextProvider>
        <Box />
      </ThemeContextProvider> */}

      <UserContextProvider>
        <User />
      </UserContextProvider>
    </div>
  );
}

export default App;
