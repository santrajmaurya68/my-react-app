import React from 'react'

export default function Note() {
    const hum = (event) =>{
        console.log(event)
    }
  return (
    <div>
        <button onClick={hum}>click me</button>
    </div>
  )
}
