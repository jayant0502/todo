import React from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
    <div className="wrapper">
      <h1 className='header'>🤷🏽 Todo</h1>
      <TodoList />

    </div>
    </div>
  );
}

export default App;
