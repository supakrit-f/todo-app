import React, { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todo, settodo] = useState("");
  const [todos, settodos] = useState([])

  return (
    <div className="App">
      <div className='container'>
        <div className='box-todo'>
          <TodoForm todo = {todo} settodo ={settodo} todos={todos} settodos={settodos}/>
          <TodoList todos = {todos}/>
        </div>
      </div>
    </div>
  );
}

export default App;
