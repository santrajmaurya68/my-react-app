import React, { useState } from 'react'
const Todo =()=>{
    const [ value , setValue ] = useState('')
    const [item , setItem] = useState([])
    const valueset = (event) =>{
         setValue(event.target.value)
         console.log(event.target.value)
    }
    const submitvalue = (event) =>{
        event.preventDefault();
         if(!value){
            return
         }
         setItem([...item , value])
         setValue('')
    } 
    const deleteitem = () =>{
      /* const newlinst = item.filter(itemobje =>{
            return itemobje.value
        })
        setItem(newlinst)*/
     /*item.map((item ,  index)=>(
           console.log(item(index) )
        ))*/
        console.log(item(0))
    }
    return(
        <div>
            <h1>TodoList</h1>
            <form onSubmit={submitvalue}>
                <input type='text' value={value} onChange ={valueset} />
              { /* <button type='submit'>submit</button> */}
            </form>
            <button onClick={submitvalue} >submit</button>
            <ol>
                {item.map((value , index)=>(
                 <li key={index}>{value}
                 <button onClick={deleteitem}>x</button>
                 </li>
            
                ))}
            </ol>
        {  /*  <button onClick={deleteitem}>x</button> */}
        </div>
    )
}
export default Todo