import React,{useState} from 'react'
import Todo from './components/Todo/index'
import Counter from './components/counter'
import Block from './components/block'

const myTodoItem=[{
  id:1,
  title:"i have to wake up at 5"

},{
  id:2,
  title:"i have to work on by dily tasks"
}]



const App: React.FC = ()=> {
  const[state,setState] = useState<boolean>(true)

  const[Tikstate,setTikstate] = useState(Array(9).fill(null))
  const[currentTurn, setCurrentTurn] = useState("X")
  
  const checkWinner = (Tikstate: any[]) => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i< winnerLogic.length; i++) {
      const [a, b, c] = winnerLogic[i] ;
      if (Tikstate[a] !== null && Tikstate[a] === Tikstate[b] && Tikstate[a] === Tikstate[c]) {
        return true
      }
    }
    return false;
  };

  
  const handleBlockClick =(index:number) =>{
    const stateCopy = Array.from(Tikstate);

    if(stateCopy[index]!= null) return ;
    stateCopy[index] = currentTurn


    // if someone win

    const winnerLogic = checkWinner(stateCopy)
    if(winnerLogic){
      alert(`${currentTurn} won the game`)
    }
    
    setCurrentTurn(currentTurn === 'X' ? 'O' : 'X')
    console.log(stateCopy[index])
    setTikstate(stateCopy)

  }
  
  return (
    <>
    <div className='board'>
      <div className='row'>
        <Block onClick={()=>handleBlockClick(0)} value ={Tikstate[0]}/>
        <Block onClick={()=>handleBlockClick(1)}  value ={Tikstate[1]}/>
        <Block onClick={()=>handleBlockClick(2)}  value ={Tikstate[2]}/>
      </div>
      <div className='row'>
        <Block onClick={()=>handleBlockClick(3)}  value ={Tikstate[3]}/>
        <Block onClick={()=>handleBlockClick(4)}  value ={Tikstate[4]}/>
        <Block onClick={()=>handleBlockClick(5)}  value ={Tikstate[5]}/>
      </div>
      <div className='row'>
        <Block onClick={()=>handleBlockClick(6)}  value ={Tikstate[6]}/>
        <Block onClick={()=>handleBlockClick(7)}  value ={Tikstate[7]}/>
        <Block onClick={()=>handleBlockClick(8)}  value ={Tikstate[8]}/>
      </div>
    </div>



    <div style={{backgroundColor:'gray'}}>
    <Todo items={myTodoItem} />
    </div>
    <button onClick={(e)=> setState(!state)}>Toggle</button>
     {state ? <Counter/>:""}
     {/* <Counter/> */}
    </>
  )
}

export default App