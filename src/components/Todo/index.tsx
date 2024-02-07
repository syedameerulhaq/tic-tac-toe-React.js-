



import React from 'react'
import TodoItem from './Todoitems/index';
import "./styles.css"

interface  ITodoItem {
    id :number;
    title: string;
} 
 
interface TodoProps {
    items : ITodoItem[];
}

 const Todo: React.FC<TodoProps> = (props)=> {
    console.log(props)
  return (
    <div className='todoContainer'>
        <ol>
        {/* <TodoItem/>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/> */}
        {
            props.items.map(item => <TodoItem key={item.id} title={item.title}/>)
        }
        </ol>
    </div>
  )
}

export default Todo