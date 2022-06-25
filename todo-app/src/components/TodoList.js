import React from 'react'
import './TodoList.css';
import { FiX } from "react-icons/fi";

const TodoList = (props) => {
  const {todos} = props;

  return (
    <div className='todoList'>
      <div className='container-list'>
        {todos.map((todo)=>(
          <div className='box-list'>
            <div className='list' key={todo.id}>
              {todo.title}
              <a href='#'><FiX/></a>
            </div> 
          </div>
        ))}
      </div>
    </div>
  )
}

export default TodoList