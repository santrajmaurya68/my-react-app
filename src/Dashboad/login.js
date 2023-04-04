import React, { useState } from "react"
const Login =()=>{
    const [name , setName] = useState('')
    const [place , setPlace] = useState('')
    const subumitvalue = async () =>{
        console.log(name+" "+place );
        var data =  await fetch('http://localhost:5000/user', {
            method: "POST", 
            headers: {
              "Content-Type": "application/json",
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({name , place})
          });
          data = await data.json(); // parses JSON response into native JavaScript objects
          console.log(data)
        }
        return(
    <div>
        <h1>Login</h1>
        <input type='text' value={name} placeholder='Enter Name' onChange={(e)=>setName(e.target.value)} />
        <input type="text"  value={place} placeholder='Enter the place' onChange={(e)=>setPlace(e.target.value)} />
       <button onClick={subumitvalue}>submit</button>
    </div>
   )
}
export default Login