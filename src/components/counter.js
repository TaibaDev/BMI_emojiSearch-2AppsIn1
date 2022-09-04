import React,{useState} from 'react'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
const Counter = () => {
    const [counter, setCounter]=useState(0);
const counterAdd=()=>{
    setCounter(counter+1);
}
const counterMinus=()=>{
    setCounter(counter-1);
}
  return (
    <div>
        <h1>Counter app</h1>
        <h2 className='text-xxl'>{counter}</h2>
        <button className='border text-xl p-5' onClick={counterAdd}><AddIcon/></button>
        <button className='border text-xl p-5 bg-green-600' onClick={counterMinus}><RemoveIcon/></button>
    </div>
  )
}

export default Counter