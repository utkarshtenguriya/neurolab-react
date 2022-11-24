
import "./App.css";
import Header from "./MyComponents/Header"
import {Footer} from "./MyComponents/Footer"
import {AddTodos} from "./MyComponents/AddTodos"
import {Todos} from "./MyComponents/Todos"
import React, { useState,useEffect} from 'react';

function App() {
  let inittodo;
    if(localStorage.getItem("todos")=== null){

      inittodo = [];
    }
    else{inittodo = JSON.parse(localStorage.getItem("todos")); } 
   
  
  const onDelete = (todo)=>
  {console.log("I am delete todo",todo);
  // deleting this way in react doesn't works it works in angular only
  // let index = todos.indexOf(todo);
  // todos.splice(index,1);
  settodos(todos.filter(e=>{return e!==todo }));
  
}
const AddTodo = (title,desc)=>{
  console.log(todos);
  let sno;
  if(todos.length===0){
    sno = 0;
  }
   else{sno = todos[todos.length-1].sno+1;}
 const mytodo = {
  sno:sno,
  title:title,
  desc:desc
 }
 settodos([...todos,mytodo]);

 
 

 

}
  
const [todos, settodos] = useState(inittodo);
useEffect(() => {
   
  localStorage.setItem("todos",JSON.stringify(todos));
  
 }, [todos])
  return (
    <>
    
    <Header title = "My Todos List" searchBar={false}/>
    <AddTodos AddTodo = {AddTodo}></AddTodos>
    <Todos todos ={todos} onDelete ={onDelete}/>
   
    <Footer/>
    
    </>
  );
}

export default App;
