import React, { useState } from "react"
const Login = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [checkbox, setCheckbox] = useState(true)
    const [cars , setCars ] = useState('')
    const submit = async () => {
        var data =  await fetch('http://localhost:5000/user', {
            method: "POST", 
            headers: {
              "Content-Type": "application/json",
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({name , email , checkbox , cars})
          });
          data = await data.json(); // parses JSON response into native JavaScript objects
          console.log(data)
        
        console.log(name, email, checkbox , cars)
    }
    return (
        <div>
            <h1>Login Page</h1>
            <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter Your Name' />
            <input type='e-mail' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Your E-mail' />
            <input type='checkbox' value={checkbox} onChange={(e) => setCheckbox(e.target.checked)} />
            <select value={cars} onChange={(e)=>setCars(e.target.value)} >
                <option >Volvo</option>
                <option >Saab</option>
                <option >Opel</option>
                <option >Audi</option>
            </select>
            <button onClick={submit}> submit</button>
        </div>
    )
}
export default Login