import { useEffect, useState } from "react"
import React from 'react'
import "./styles.css"

const Counter:React.FC =()=> {
    const [counter,setcounter] = useState<number>(0);
    
    // on mounting
   useEffect(()=>{
    console.log("counter mounted");


    //counter unmounted
    return function(){
      console.log("counter unmounted");
    }
   }, []);

//  on updatation
   useEffect(()=>{
    console.log("counter ubdated",counter);
    
    return function(){
      console.log("counter useeffect returned",counter);
    }


   }, [counter]);

    const handleIncrement =()=>{
        setcounter(counter + 1)
        
    }
    const handleDecrement =()=>{
        if(counter == 0) return;
        setcounter(counter - 1)
    }

  return (
    <>
    <h1>{counter}</h1>
    <div className='counter'>
    <button  onClick={handleIncrement}  style={{backgroundColor:"green"}}>increment</button>
    <button onClick={handleDecrement} style={{backgroundColor:"tomato"}}>decriment</button>
    </div>
    
</> 
  )
}

export default Counter