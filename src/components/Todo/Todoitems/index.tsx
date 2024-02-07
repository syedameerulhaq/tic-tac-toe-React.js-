
import React from 'react'
import  "./styles.css"

interface TodoItamsProps{
    title:string;
}


const TodoItem: React.FC<TodoItamsProps> =(props)=> {
  return (
<li>{props.title}</li> 
 );
}

export default TodoItem;