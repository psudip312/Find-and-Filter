import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const numbers=[1,2,3,4,5,6,7,8,9];
  const [inputnumber,setInputNumber]=useState();
  const [filternumber,setFilterNumber]=useState([]);

  const handleInputChange =(event)=>{
setInputNumber(event.target.value)
  }
  const findNumber=()=>{
    const target=parseInt(inputnumber)
    const matchnumber=numbers.find((number)=>number===target)
    console.log("aako number",matchnumber)
  }
  const filterNumber =()=>{
    const filteredNumber=numbers.filter((number)=>number%2===0)
    // aba chai array bata divisle by 2 wala number haru filter vayo
setFilterNumber(filteredNumber)
console.log("filternumberharu",filternumber)
  }


  return (
    <>
<h1>hello</h1>
<input type="number" onChange={handleInputChange} /><br></br>
<button onClick={findNumber}>Find</button><br></br>
<button onClick={filterNumber}>Filter</button>
<ul>
        {filternumber.map((number) => (
          <li key={number}>{number}</li>
        ))}
      </ul>


    </>
  )
}

export default App
