import React from 'react'


export const Todo = ({todo,onDelete}) => {
  return (
    <div className="container">
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className="btn btn-sm btn-danger"onClick={()=>{onDelete(todo)}}>DELETE</button>
       </div>
  )
}
