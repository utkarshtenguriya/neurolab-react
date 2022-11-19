import React from 'react'
import { Todo } from './Todo'

export const Todos = (props) => {
  let myStyle = {
     minHeight:"100vh",
     margin:"10px auto"
  }
  return (
    <div className="container" style = {myStyle}>
      <h3 className='my-3'>Todos List</h3>
     {props.todos.length===0?"Nothing to display all deleted":props.todos.map((todo)=>{
        return (<><Todo todo = {todo} key = {todo.sno} onDelete = {props.onDelete }/>
        <hr/></>
        )
      })}
      
    </div>
  )
}
