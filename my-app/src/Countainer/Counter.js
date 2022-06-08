import React,{useState} from 'react'

const Count = () => {
  const[count,setCount]=useState(0);
  const inc=()=>{
    setCount(count+1);
  }
  const dec=()=>{
    if(count>0)
    setCount(count-1);
  }
  return (
    <div text-align="center">
      <h1 >{count}</h1>
      <button onClick={() => setCount (count<10? count + 1 : count)} >+</button>
      {Count}
      <button onClick={() => setCount (count === 0? count : count  - 1 )}>-</button>
    </div>
  )
}

export default Count;