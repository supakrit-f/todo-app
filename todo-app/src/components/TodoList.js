import React from 'react'
import './TodoList.css';
import { FiX } from "react-icons/fi";

const TodoList = (props) => {
  const {todos, settodos} = props;
  const handleDelete = ({id}) =>{
    settodos(todos.filter((todo)=> todo.id !== id))
  }

  return (
    <div className='todoList'>
      <div className='container-list'>
        {todos.map((todo)=>(
          <div className='box-list'>
            <div className='list' key={todo.id}>
              {todo.title}
              <div onClick={()=>handleDelete(todo)} className='icon-close-list' ><FiX/></div>
            </div> 
          </div>
        ))}
      </div>
    </div>
  )
}

export default TodoList