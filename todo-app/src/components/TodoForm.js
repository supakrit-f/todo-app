import React from 'react'
import './todoForm.css';

const TodoForm = (props) => {

  const {todo, settodo, todos, settodos} = props;

  const todoList={
    id: todos.length,
    title: todo
  }
  
  const handleChange = (e) =>{
    settodo(e.target.value)
  }

  const handleSubmit = (e) =>{
    e.preventDefault();

    if(todo !== "" && todos.length <= 8){
      settodos([...todos,todoList])
    }else{
      return
    }

  }


  return (
    <div className='container-todoForm'>
      <div className='container-form'>
        <form onSubmit={handleSubmit}>
            <div className='head'>
                <h1>TODO APP</h1>
            </div>
            <div className='form-input'>
              <input type='text' onChange={handleChange}/>
              <button type='submit' className='btn-add'>Add</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default TodoForm